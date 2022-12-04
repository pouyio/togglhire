import React from "react";
import "./App.css";
import { EmailsForm } from "./components/EmailsForm";
import { AlertProvider } from "./contexts/Alert";

function App() {
  return (
    <div className="container">
      <AlertProvider>
        <div className="main">
          <h1 className="title">Emailnator 2023 🦾</h1>
          <p>Send tons of emails all at once.</p>
        </div>
        <EmailsForm />
      </AlertProvider>
    </div>
  );
}

export default App;
