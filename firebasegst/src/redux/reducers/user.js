import { USER_LOGIN, USER_SIGNUP, USER_LOGOUT } from '../types/user';

const initialState = {
    uid: ''
};

export const user = (state = initialState, {type, payload}) => {
    switch (type) {
        case USER_LOGIN:
            
            return { ...state, uid: payload.uid};
        
        case USER_SIGNUP:

            return { ...state, uid: payload.uid };
        
        case USER_LOGOUT:

            return { };
    
        default:
            return state;
    }
}