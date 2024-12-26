import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useInstantDB } from './useInstantDB';
import { id } from '@instantdb/react';

export const useChat = () => {
    const { state, dispatch } = useAppContext();
    const db = useInstantDB();

    const [refresh, setRefresh] = useState(false);

    const { isLoading, error, data } = db.useQuery({
        contacts: {},
        messages: {},
    });

    useEffect(() => {
        if (isLoading) return;
        if (error) {
            console.error('Error fetching data from InstantDB', error);
            return;
        }

        const { contacts, messages } = data;

        dispatch({ type: 'SET_CONTACTS', payload: contacts });
        dispatch({ type: 'SET_MESSAGES', payload: messages });
    }, [isLoading, error, data, dispatch, refresh]);

    useEffect(() => {
        const savedContact = localStorage.getItem('selectedContact');
        if (savedContact) {
            dispatch({ type: 'SELECT_CONTACT', payload: JSON.parse(savedContact) });
        }
    }, [dispatch]);

    const sendMessage = (sender, recipient, message) => {
        const newMessage = {
            id: Date.now(),
            sender,
            recipient,
            message,
            timestamp: Date.now(),
        };

        db.transact(db.tx.messages[id()].update(newMessage));
        dispatch({ type: 'SEND_MESSAGE', payload: newMessage });

        setRefresh(!refresh);
    };

    const addContact = (name, avatar) => {
        const newContact = {
            id: state.contacts.length + 1,
            name,
            avatar,
        };

        db.transact(db.tx.contacts[id()].update(newContact));
        dispatch({ type: 'SET_CONTACTS', payload: [...state.contacts, newContact] });

        setRefresh(!refresh);
    };

    const selectContact = (contact) => {
        localStorage.setItem('selectedContact', JSON.stringify(contact));
        dispatch({ type: 'SELECT_CONTACT', payload: contact });
    };

    return {
        contacts: state.contacts,
        messages: state.messages,
        selectedContact: state.selectedContact,
        sendMessage,
        addContact,
        selectContact,
    };
};
