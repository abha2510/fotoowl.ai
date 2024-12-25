import React from 'react';

function MessageList({ messages }) {
    return (
        <div style={styles.messageList}>
            {messages.length === 0 ? (
                <div style={styles.noMessages}>No messages</div>
            ) : (
                messages.map((message, index) => (
                    <div key={message.id || index} style={styles.message}>
                        <div style={styles.messageSender}>{message.sender}</div>
                        <div style={styles.messageText}>{message.message}</div>
                        <div style={styles.timestamp}>
                            {new Date(message.timestamp).toLocaleTimeString()}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

const styles = {
    messageList: {
        flexGrow: 1,
        overflowY: 'auto',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    message: {
        marginBottom: '15px',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        maxWidth: '80%',
        wordWrap: 'break-word',
    },
    messageSender: {
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#333',
        marginBottom: '5px',
    },
    messageText: {
        fontSize: '14px', 
        color: '#444',  
        lineHeight: '1.4', 
    },
    timestamp: {
        fontSize: '12px',  
        color: '#888', 
        marginTop: '5px',
        textAlign: 'right',  
    },
    noMessages: {
        fontSize: '16px',
        color: '#888',
        textAlign: 'center',
        padding: '20px',
    },
};


export default MessageList;
