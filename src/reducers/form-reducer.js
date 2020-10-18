import { SET_OTP, SET_GENDER, SET_FORMVALUES } from '../actions/index';


function formReducer(state = {}, action) {
    switch (action.type) {
        case SET_OTP:
            state = { ...state, 'otp': action.payload }
            return state;
        case SET_GENDER:
            state = { ...state, 'gender': action.payload }
            return state;
        case SET_FORMVALUES:
            state = { ...state, ...action.payload }
            return state;
        default:
            return state;
    }
};

export default formReducer;
