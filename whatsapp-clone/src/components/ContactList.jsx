import React from 'react';

function ContactList({ contacts, selectContact }) {
  return (
    <div style={{ padding: '10px' }}>
      {contacts.map(contact => (
        <div
          key={contact.id}
          onClick={() => selectContact(contact)}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            marginBottom: '8px',
            cursor: 'pointer',
            borderBottom: '1px solid #ccc',
          }}
        >
          <img
            src={contact.avatar}
            alt={contact.name}
            style={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              marginRight: '15px'
            }}
          />
          <span
            style={{
              fontSize: '18px',
              fontWeight: '500',
              color: '#B43F3F'
            }}
          >
            {contact.name}
          </span>
        </div>
      ))}
    </div>
  );
}


export default ContactList;
