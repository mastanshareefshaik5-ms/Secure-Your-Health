import "./ChatBot.css";
import { useState } from "react";

function ChatBot() {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {

    if (message.trim() === "") return;

    let reply = "";

    const msg = message.toLowerCase();

    if (msg.includes("fever")) {
      reply = "Drink plenty of water and consult a doctor if the fever continues.";
    }
    else if (msg.includes("cold")) {
      reply = "Take rest, drink warm fluids and consult a doctor if symptoms worsen.";
    }
    else if (msg.includes("headache")) {
      reply = "Stay hydrated and take proper rest. Visit a doctor if the headache is severe.";
    }
    else if (msg.includes("covid")) {
      reply = "If you have COVID-19 symptoms, isolate yourself and consult a healthcare professional.";
    }
    else if (msg.includes("diabetes")) {
      reply = "Maintain a healthy diet, exercise regularly and monitor your blood sugar levels.";
    }
    else {
      reply = "I'm here to help with basic health questions. Please consult a doctor for medical advice.";
    }

    setChat([
      ...chat,
      {
        user: message,
        bot: reply
      }
    ]);

    setMessage("");
  };

  return (
    <div className="chat-container">

      <h1>🤖 AI Health ChatBot</h1>

      <div className="chat-box">

        {chat.length === 0 && (
          <p className="welcome">
            Ask me anything about your health.
          </p>
        )}

        {chat.map((item, index) => (

          <div key={index}>

            <div className="user-msg">
              You : {item.user}
            </div>

            <div className="bot-msg">
              Bot : {item.bot}
            </div>

          </div>

        ))}

      </div>

      <div className="input-area">

        <input
          type="text"
          placeholder="Type your question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={sendMessage}>
          Send
        </button>

      </div>

    </div>
  );
}

export default ChatBot;