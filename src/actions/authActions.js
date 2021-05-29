const URL_BASE = 'https://stormy-tor-36677.herokuapp.com';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (email, uid, displayName) => ({
  type: LOGIN,
  payload: { email, uid, displayName },
});

export const logout = () => ({
  type: LOGOUT,
});

export async function postUser(email, displayName, uid) {
  const value = {
    id: uid,
    name: displayName,
    email: email,
    alternativeEmail: '',
  };
  const response = await fetch(`${URL_BASE}/create/user`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  });
  console.log(response);
}
