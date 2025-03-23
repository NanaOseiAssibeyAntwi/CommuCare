import React, { useState, useEffect } from "react";
import bulb from "../assets/bulb.jpg";
import akata from "../assets/akata.jpg";
import drip from "../assets/drip.jpg";
import teadybear from "../assets/teddybear.jpg";
import reactImage from "../assets/react.svg";

const contacts = [
  { id: 1, name: "Khin Osei", img: bulb },
  { id: 2, name: "March Discussion", img: akata },
  { id: 3, name: "Paa Gyamfi", img: drip },
  { id: 4, name: "Tomorrow's ghost", img: teadybear },
  { id: 5, name: "Computer Science 3", img: reactImage },
  { id: 6, name: "Badu", img: drip },
];

function App() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [messagesByContact, setMessagesByContact] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

 
  useEffect(() => {
    const storedMessages = localStorage.getItem("messagesByContact");
    if (storedMessages) {
      setMessagesByContact(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(messagesByContact).length > 0) {
      localStorage.setItem("messagesByContact", JSON.stringify(messagesByContact));
    }
  }, [messagesByContact]);

  const sendMessage = () => {
    if (newMessage.trim() !== "" && selectedContact) {
      const timestamp = new Date().toLocaleTimeString();
      const updatedMessages = [
        ...(messagesByContact[selectedContact.id] || []),
        { text: newMessage, type: "sent", timestamp },
      ];
      
      setMessagesByContact((prev) => ({
        ...prev,
        [selectedContact.id]: updatedMessages,
      }));

      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="chat-container">

      <div className="chat-sidebar">
        <input
          type="text"
          placeholder="Search"
          className="search-box"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className={`contact ${selectedContact?.id === contact.id ? "active" : ""}`}
            onClick={() => setSelectedContact(contact)}
          >
            <img src={contact.img} alt={contact.name} />
            <div className="contact-info">
              <div className="contact-name">{contact.name}</div>
              <div className="contact-message">
                {messagesByContact[contact.id]?.slice(-1)[0]?.text || "No messages"}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-main">
        {selectedContact ? (
          <>
            <h2>{selectedContact.name}</h2>
            <p>Last seen recently</p>
            <div className="chat-messages">
              {(messagesByContact[selectedContact.id] || []).map((msg, index) => (
                <div key={index} className={`message ${msg.type}`}>
                  {msg.text}
                  <div className="timestamp">{msg.timestamp}</div>
                </div>
              ))}
            </div>
            <div className="chat-input-container">
              <input
                type="text"
                className="chat-input"
                placeholder="Write a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button className="send-button" onClick={sendMessage}>
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="default-screen">
            <h2>Welcome to Chat</h2>
            <p>Select a contact to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
