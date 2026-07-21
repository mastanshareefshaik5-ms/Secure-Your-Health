import { useState } from "react";
import "./ChatBot.css";

function ChatBot() {

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Welcome to Secure Your Health. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (input.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    let botReply = "";

    const msg = input.toLowerCase();

    if (msg.includes("fever")) {

      botReply =
        "🤒 Stay hydrated, take enough rest, and consult a doctor if the fever continues for more than 2 days.";

    }

    else if (msg.includes("cold")) {

      botReply =
        "🤧 Drink warm fluids, take proper rest, and consult a physician if symptoms become severe.";

    }

    else if (msg.includes("headache")) {

      botReply =
        "🤕 Stay hydrated, reduce screen time, and get adequate sleep. Persistent headaches should be checked by a doctor.";

    }

    else if (msg.includes("covid")) {

      botReply =
        "😷 If you have COVID symptoms, isolate yourself, wear a mask, and consult a healthcare professional.";

    }

    else if (msg.includes("blood")) {

      botReply =
        "🩸 You can visit our Blood Bank or Blood Donation section to find available blood or register as a donor.";

    }

    else if (msg.includes("hospital")) {

      botReply =
        "🏥 Open the Hospital module to find nearby hospitals and healthcare centers.";

    }

    else if (msg.includes("doctor")) {

      botReply =
        "👨‍⚕️ Visit the Doctors page to view specialists and their information.";

    }

    else if (msg.includes("medicine")) {

      botReply =
        "💊 You can search medicines or place an order through the Medicine Order section.";

    }

    else if (msg.includes("appointment")) {

      botReply =
        "📅 You can book appointments using the Appointment page.";

    }

    else if (msg.includes("bmi")) {

      botReply =
        "⚖️ Use our BMI Calculator to check your Body Mass Index.";

    }

    else if (msg.includes("hello") || msg.includes("hi")) {

      botReply =
        "😊 Hello! How can I assist you with your healthcare needs?";

    }

    else {

      botReply =
        "🤖 Sorry, I don't have information about that. Please contact your healthcare provider for medical advice.";

    }

    setMessages((prev) => [

      ...prev,

      userMessage,

      {

        sender: "bot",

        text: botReply,

      },

    ]);

    setInput("");

  };

  const handleKeyPress = (e) => {

    if (e.key === "Enter") {

      sendMessage();

    }

  };

  return (

    <div className="chatbot-page">

      <div className="chat-container">

        <h1>

          AI Health ChatBot

        </h1>

        <div className="chat-box">

          {

            messages.map((msg,index)=>(

              <div

                key={index}

                className={

                  msg.sender==="user"

                  ?

                  "user-message"

                  :

                  "bot-message"

                }

              >

                {msg.text}

              </div>

            ))

          }

        </div>

        <div className="chat-input">

          <input

            type="text"

            placeholder="Type your message..."

            value={input}

            onChange={(e)=>setInput(e.target.value)}

            onKeyDown={handleKeyPress}

          />

          <button onClick={sendMessage}>

            Send

          </button>

        </div>

      </div>

    </div>

  );

}

export default ChatBot;