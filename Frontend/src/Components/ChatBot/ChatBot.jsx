import { useState } from "react";
import "./ChatBot.css";

function ChatBot() {

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = () => {

    const msg = message.toLowerCase();

    if (msg.includes("fever"))
      setReply("Drink plenty of water and consult a doctor if fever persists.");

    else if (msg.includes("headache"))
      setReply("Take proper rest, stay hydrated, and consult a doctor if severe.");

    else if (msg.includes("covid"))
      setReply("Wear a mask, isolate if necessary, and consult your healthcare provider.");

    else if (msg.includes("diabetes"))
      setReply("Maintain a healthy diet, exercise regularly, and monitor blood sugar.");

    else if (msg.includes("blood"))
      setReply("Visit the Blood Bank page to check blood availability.");

    else
      setReply("Please consult a qualified doctor for medical advice.");
  };

  return (
    <div className="chat-container">

      <div className="chat-card">

        <h2>AI Health Assistant</h2>

        <textarea
          rows="5"
          placeholder="Ask your health question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={sendMessage}>
          Ask
        </button>

        {reply && (
          <div className="reply">
            {reply}
          </div>
        )}

      </div>

    </div>
  );
}

export default ChatBot;