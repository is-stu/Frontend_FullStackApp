export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (email,uid, displayName) => ({ type: LOGIN, payload: {email, uid, displayName} });

export const logout = () => ({
  type: LOGOUT,
});
