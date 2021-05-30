import * as actions from '../actions/authActions';

export const initialState = {
  uid: null,
  email: null,
  displayName: null,
  profile: { email: '', name: '', lastName: '', alternativeEmail: '' },
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      const payload = action.payload;
      return {
        ...state,
        ...action.payload,
        email: payload.email,
        uid: payload.uid,
        displayName: payload.displayName,
      };
    case actions.PROFILE:
      const profile = action.payload.profile;
      return {
        ...state,
        ...action.payload,
        profile: {
          email: profile.email,
          name: profile.name,
          lastName: profile.lastName,
          alternativeEmail: profile.alternativeEmail,
        },
      };
    case actions.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
