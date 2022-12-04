import { TYPES } from "../../contexts/Alert";
import "./Alert.css";

export const Alert = ({ hidden, type, onClose }) => {
  return (
    <div
      className={`alert ${type === TYPES.error ? "error" : ""} ${
        hidden ? "hidden" : ""
      }`}
    >
      {type === TYPES.success
        ? "Success, all the emails were sent correctly!"
        : "There was a problem"}
      <button className="close" onClick={onClose}>
        ✖️
      </button>
    </div>
  );
};
