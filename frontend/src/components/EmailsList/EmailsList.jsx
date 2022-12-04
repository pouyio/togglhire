import { ERROR_TYPES } from "../../utils";
import "./EmailsList.css";

// emails: type: string[]
// errorType: if present, indicates the error type from ERROR_TYPES
// errors: failed emails, type: string[]
export const EmailsList = ({ emails, errorType, errors = [] }) => {
  if (!emails.length) {
    return null;
  }

  return (
    <section className="emails">
      {errorType === ERROR_TYPES.send_failure ? (
        <p className="message error">
          There was an error sending emails to the directions highlithed in red
          bellow:
        </p>
      ) : errorType === ERROR_TYPES.invalid_email_address ? (
        <p className="message error">
          Some emails might be invalid, check them highlithed in red bellow:
        </p>
      ) : emails.length === 1 ? (
        <p className="message">This direction will be sent an email:</p>
      ) : (
        <p className="message">
          These {emails.length} directions will be sent an email:
        </p>
      )}
      <br />
      {emails.map((email) => (
        <span
          className={`email animated rounded ${
            errors.includes(email) ? "failed" : ""
          }`}
          key={email}
        >
          {email}
        </span>
      ))}
    </section>
  );
};
