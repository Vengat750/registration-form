export const SET_OTP = 'SET_OTP';
export const SET_GENDER = 'SET_GENDER';
export const SET_FORMVALUES = 'SET_FORMVALUES';

export function setOtp(otp) {
    const action = {
        type: SET_OTP,
        payload: otp
    }
    return action
}

export function setGender(gender) {
    const action = {
        type: SET_GENDER,
        payload: gender
    }
    return action
}

export function setFormValues(values) {
    const action = {
        type: SET_FORMVALUES,
        payload: values
    }
    return action
}



