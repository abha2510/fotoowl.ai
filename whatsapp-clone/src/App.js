import React, { useState, useEffect } from 'react';
import { useAppContext } from './context/AppContext';
import ContactList from './components/ContactList';
import MessageList from './components/MessageList';
import Message from './components/Message';
import { useChat } from './hooks/useChat';

function App() {
  const { state, dispatch } = useAppContext();
  const { contacts, selectedContact, messages, selectContact, sendMessage, addContact } = useChat();

  const [newContactName, setNewContactName] = useState('');
  const [newContactAvatar, setNewContactAvatar] = useState(null);

  useEffect(() => {
    if (!contacts.length) {
      const defaultContacts = [
        { id: 1, name: 'Alice', avatar: 'https://picsum.photos/200?random=1' },
        { id: 2, name: 'Bob', avatar: 'https://picsum.photos/200?random=2' },
      ];

      dispatch({ type: 'SET_CONTACTS', payload: defaultContacts });
    }

    if (!messages.length) {
      const defaultMessages = [
        { id: 1, sender: 'Alice', recipient: 'User 1', message: 'Hello!', timestamp: Date.now() },
        { id: 2, sender: 'User 1', recipient: 'Alice', message: 'Hi Alice!', timestamp: Date.now() },
        { id: 3, sender: 'Bob', recipient: 'User 1', message: 'Hey!', timestamp: Date.now() },
      ];
      dispatch({ type: 'SET_MESSAGES', payload: defaultMessages });
    }
  }, [contacts, messages, dispatch]);

  const handleAddContact = (e) => {
    e.preventDefault();
    if (newContactName && newContactAvatar) {
      const newContact = {
        id: contacts.length + 1,
        name: newContactName,
        avatar: URL.createObjectURL(newContactAvatar),
      };
      addContact(newContact.name, newContact.avatar);
      setNewContactName('');
      setNewContactAvatar(null);
    } else {
      alert('Please enter both a name and upload a photo');
    }
  };

  const filteredMessages = selectedContact
    ? messages.filter(
      (msg) =>
        (msg.sender === selectedContact.name && msg.recipient === 'You') ||
        (msg.sender === 'You' && msg.recipient === selectedContact.name)
    )
    : [];

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <ContactList contacts={contacts} selectContact={selectContact} />
        <div style={styles.addContactForm}>
          <h3 style={styles.formHeading}>Add New Contact</h3>
          <form onSubmit={handleAddContact}>
            <div>
              <input
                type="text"
                placeholder="Contact Name"
                value={newContactName}
                onChange={(e) => setNewContactName(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewContactAvatar(e.target.files[0])}
                required
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>Add Contact</button>
          </form>
        </div>

      </div>
      <div style={styles.chatPanel}>
        {selectedContact ? (
          <>
            <MessageList messages={filteredMessages} />
            <Message recipient={selectedContact.name} sendMessage={sendMessage} />
          </>
        ) : (
          <div style={styles.contact}>Select a contact to chat with</div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  leftPanel: {
    width: '360px',
    padding: '10px',
    backgroundColor: '#D7D3BF',
    position: 'relative'
  },
  addContactForm: {
    marginTop: 'auto',
    position: 'absolute',
    bottom: '70px',
    width: '83%',
    maxWidth: '400px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
  },
  formHeading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  chatPanel: {
    flexGrow: 1,
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ECEBDE',
  },
  contact: {
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
  }
};

export default App;
