import userActionTypes from './user.types';

// Sign in Actions
export const signInStart = (usernameAndPassword) => ({
    type:userActionTypes.SIGN_IN_START,
    payload:usernameAndPassword
})

export const signInFailure = (error) => ({
    type:userActionTypes.SIGN_IN_FAILURE,
    payload:error
})

export const signInSuccess = (user) => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user,
  });