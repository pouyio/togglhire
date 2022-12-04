import "./FilesList.css";

// files is an array of files: [{name: "file-name-1", ...}]
// counts is a map with the count of each file: {"file-name-1": 2, ...}
export const FilesList = ({ files, counts }) => {
  if (!files.length) {
    return null;
  }

  return (
    <ul className="files">
      {files.map((file, index) => {
        return (
          <li className="file" key={file.name}>
            <span className="file-icon">📝</span>
            <span className="file-title">{file.name}</span>
            <span className="file-count">
              <i>
                {counts[index]} email{counts[index] > 1 ? "s" : ""}
              </i>
            </span>
          </li>
        );
      })}
    </ul>
  );
};
