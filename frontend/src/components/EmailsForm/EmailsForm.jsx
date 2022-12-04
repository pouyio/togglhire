import { useEffect, useMemo, useRef, useState } from "react";
import { TYPES, useAlert } from "../../contexts/Alert";
import { parseFile, sendEmails } from "../../utils";
import { DropZone } from "../DropZone";
import { EmailsList } from "../EmailsList";
import { FilesList } from "../FilesList";
import "./EmailsForm.css";

const ALLOWED_TYPE = "text/plain";

export const EmailsForm = () => {
  const [files, setFiles] = useState([]); // files selected by user
  const [emailsMap, setEmailsMap] = useState({}); // {"file-name-1": ["email@email.com"], "file-name-2": ["email2@email.com"]}
  const [errorResponse, setErrorResponse] = useState(null); // response from API if failed, type: {error: string, emails: string[]}
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const { showAlert, closeAlert } = useAlert();

  // derived state from emailsMap so there is no need to calculate on every render
  const { allEmails, emailsByFile } = useMemo(() => {
    const allEmails = Array.from(new Set(Object.values(emailsMap).flat()));
    const emailsByFile = Object.values(emailsMap).map((arr) => arr.length);
    return { allEmails, emailsByFile };
  }, [emailsMap]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    closeAlert();
    setErrorResponse(null);
    sendEmails(allEmails).then((response) => {
      setLoading(false);
      if (!response?.error) {
        formRef.current.reset();
        setFiles([]);
        showAlert(TYPES.success);
      } else {
        showAlert(TYPES.error);
        setErrorResponse(response);
      }
    });
  };

  const handleInputChange = (event) => {
    setErrorResponse(null);
    setFiles(Array.from(event.target.files));
  };

  const handleDropFiles = (files) => {
    setErrorResponse(null);
    setFiles((files || []).filter((file) => file.type === ALLOWED_TYPE));
  };

  useEffect(() => {
    Promise.all(files.map(parseFile)).then((parsedFiles) => {
      setEmailsMap(
        parsedFiles.reduce((acc, parsedFile, index) => {
          acc[files[index].name] = parsedFile;
          return acc;
        }, {})
      );
    });
  }, [files]);

  return (
    <form className="main-form" onSubmit={handleSubmit} ref={formRef}>
      <DropZone onDropFiles={handleDropFiles}>
        <label htmlFor="files" className="input-label">
          {!files.length && (
            <>
              👋 Click here to select or drop &nbsp;<code>.txt</code>&nbsp;
              files with emails, one per line.
            </>
          )}
          <input
            multiple
            id="files"
            type="file"
            accept={ALLOWED_TYPE}
            onChange={handleInputChange}
          />
          <FilesList files={files} counts={emailsByFile} />
        </label>
      </DropZone>
      <EmailsList
        emails={allEmails}
        errorType={errorResponse?.error}
        errors={errorResponse?.emails}
      />
      <button
        type="submit"
        className="animated rounded"
        disabled={!files.length || loading}
      >
        {loading ? (
          <>
            Loading <span className="spin">🌀</span>
          </>
        ) : (
          <>{errorResponse?.error ? "Retry sending" : "Send"} emails</>
        )}
      </button>
    </form>
  );
};
