import { useReducer } from 'react';
import {
    UPDATE_SESSIONS,
    UPDATE_ME,
    UPDATE_PLAYERS,
} from './actions';
import { ADD_USER_TO_SESSION } from './mutations';

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
            case ADD_USER_TO_SESSION:
            return {
                ...state,
                sessions: [...state.sessions, action.session]
            }
        default: 
            return state;    
    }
};

export function usePlayerReducer(initialState) {
    return useReducer(reducer, initialState);
};