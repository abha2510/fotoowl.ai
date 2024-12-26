import React, { createContext, useReducer, useContext } from 'react';

const AppContext = createContext();

const initialState = {
    contacts: [],
    messages: [],
    selectedContact: null,
    currentUser: 'You',
};

function appReducer(state, action) {
    switch (action.type) {
        case 'SET_CONTACTS':
            return { ...state, contacts: action.payload };
        case 'SET_MESSAGES':
            return { ...state, messages: action.payload };
        case 'SELECT_CONTACT':
            return { ...state, selectedContact: action.payload };
        case 'SEND_MESSAGE':
            return { ...state, messages: [...state.messages, action.payload] };
        case 'ADD_CONTACT':
            return { ...state, contacts: [...state.contacts, action.payload] };
        default:
            return state;
    }
}

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
