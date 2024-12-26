# WhatsApp Web-like Application with Real-Time Messaging
### This project is a WhatsApp Web-like messaging application built with React.js. It features real-time messaging using InstantDB, local storage via IndexedDB for offline capabilities, and a simple and responsive UI inspired by WhatsApp Web.
## ❄️ Features
* Contact List: Displays a list of contacts on the left side.
* Chat Window: Displays the chat history of the selected contact on the right side.
* Message Field: Allows users to send new messages.
* Real-Time Messaging: Uses InstantDB for real-time message storage and retrieval.
* Offline Capability: Uses IndexedDB to store data locally for offline functionality.

## 🤹🏻 Tech Stack
### Frontend:
* React.js
* React Hooks (useState, useEffect, useReducer)
* React Context API

### Backend:
* InstantDB for real-time messaging

### Local Storage:
* IndexedDB for offline message storage

### Deployment:
* Deployed on Vercel

## ❇️ Usage  
* Add New Contact: Click on the "Add Contact" form to add new contacts to your list. You can upload an avatar and provide a contact name.
  
![image](https://github.com/user-attachments/assets/2a2ab1c0-3fbf-4669-b5b4-a9a8717c90ae)

* Chat with Contacts: Click on a contact from the contact list to open the chat window. You can send and receive messages in real-time.

  ![image](https://github.com/user-attachments/assets/d19cc999-aee3-4fcd-bb4c-9601e97ad424)

* Offline Support: The app uses IndexedDB to store your messages locally, allowing you to chat even when you're offline. Once online, the messages will sync with the real-time database (InstantDB).

## Demo
You can view the live demo of the application here:https://drive.google.com/file/d/1swAdiRU_P5SOqSR9dJLyB_H5A29YeWsr/view?usp=sharing
## Visit : https://fotoowl-ai.vercel.app/
