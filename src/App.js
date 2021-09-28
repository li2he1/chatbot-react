import "./styles.css";
import React from "react";
import Chatbot from "react-chatbot-kit";

export default function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: "500px" }}>
        <Chatbot />
      </div>
    </div>
  );
}
