import React, { useState } from 'react';

function Message({ recipient, sendMessage }) {
  const [message, setMessage] = useState('');
  const [sender] = useState('You');

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage(sender, recipient, message);
      setMessage('');
    }
  };

  return (
    <div style={styles.messageForm}>
      <input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSendMessage} style={styles.sendButton}>
        Send
      </button>
    </div>
  );
}

const styles = {
  messageForm: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: '10px',
    marginRight: '10px',
    border: '1px solid lightgray',
    borderRadius: '5px',
    fontSize: '20px'
  },
  sendButton: {
    padding: '10px',
    border: '1px solid lightgray',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 'bold',
  },
};

export default Message;
