import { useReducer } from 'react';
import {
    UPDATE_SESSIONS,
    UPDATE_ME,
    UPDATE_PLAYERS,
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_SESSIONS:
            return {
                ...state,
                sessions: [...action.sessions],
            };

            case UPDATE_PLAYERS:
                return {
                    ...state,
                    players: [...action.players],
                };

            case UPDATE_ME:
                return {
                    ...state,
                    me: [...action.me],
                };

        default: 
            return state;    
    }
};

export function usePlayerReducer(initialState) {
    return useReducer(reducer, initialState);
};