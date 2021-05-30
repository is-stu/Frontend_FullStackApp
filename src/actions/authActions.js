const URL_BASE = 'https://stormy-tor-36677.herokuapp.com';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const PROFILE = 'PROFILE';

export const login = (email, uid, displayName) => ({
  type: LOGIN,
  payload: { email, uid, displayName },
});

export const logout = () => ({
  type: LOGOUT,
});

export const profile = ({ email, name, lastName, alternativeEmail }) => ({
  type: PROFILE,
  payload: { profile: { email, name, lastName, alternativeEmail } },
});

export async function postUser(email, displayName, uid) {
  const value = {
    id: uid,
    name: displayName,
    email,
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
  await response.text();
}

export function getUser(id) {
  return async (dispatch) => {
    const response = await fetch(`${URL_BASE}/user/get/${id}`);
    const data = await response.json();
    dispatch(profile(data));
  };
}

export async function updateUser({
  email,
  emailVisible,
  lastName,
  name,
  userId,
}) {
  const data = {
    id: userId,
    email,
    name,
    lastName,
    alternativeEmail: emailVisible
  }
  const response = await fetch(`${URL_BASE}/update/user`, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  await response.text();
}
