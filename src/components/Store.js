import React, { createContext, useReducer } from 'react';

export const CTX = createContext()

const initState = {
    'general': [
        {from: 'ajay', msg: 'hello'},
        {from: 'ajay', msg: 'hello'},
        {from: 'ajay', msg: 'hello'}
    ],
    'topic': [
        {from: 'ashok', msg: 'hello'},
        {from: 'ashok', msg: 'hello'},
        {from: 'ashok', msg: 'hello'}
    ],
}

function reducer(state, action) {
    const {from, msg, topic} = action.payload
    switch(action.type) {
        case 'RECEIVE_TYPE':
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

function Store(props) {
    const reducerHook = useReducer(reducer, initState)   
    return (
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    );
}

export default Store;