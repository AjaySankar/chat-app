import React, { createContext, useReducer } from 'react';
import io from 'socket.io-client';

export const CTX = createContext()

const initState = {
    'general': [
        {from: 'ajay', msg: 'hello'},
        {from: 'ajay', msg: 'hello'},
        {from: 'ajay', msg: 'hello'}
    ]
}

function reducer(state, action) {
    const {from, msg, topic} = action.payload
    switch(action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    { from,msg }
                ]  
            }
        default:
            return state
    }
}

let socket;

function sendChatAction(value) {
    socket.emit('chat message', value)
}

function Store(props) {

    const [allChats, dispatch] = useReducer(reducer, initState)
    const user = 'ajay' + Math.random(100).toFixed(2)

    if(!socket) {
        socket = io(':3001')
        socket.on('chat message', (msg) => {
            dispatch({type: 'RECEIVE_MESSAGE', payload: msg})
        })
    }
 
    return (
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    );
}

export default Store;