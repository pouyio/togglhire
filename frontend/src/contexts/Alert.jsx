import { createContext, useContext, useState } from "react";
import { Alert } from "../components/Alert";

export const TYPES = {
  success: "success",
  error: "error",
};

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const [type, setType] = useState(null);

  const showAlert = (alertType) => {
    setType(alertType);
    setOpened(true);
  };

  const closeAlert = () => {
    setOpened(false);
  };

  return (
    <AlertContext.Provider value={{ showAlert, closeAlert }}>
      <Alert type={type} onClose={closeAlert} hidden={!opened} />
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
