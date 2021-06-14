// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})



//---------------------------------------------------------------------------------------//
const initialState = { user: null, loaded: false };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  // if (data.errors) {
  //   return;
  // }
  if (data.errors) {
    dispatch(setUser(null))
    return data;
  }

  dispatch(setUser(data))
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  const data = await response.json();
  // if (data.errors) {
  //   return data;
  // }
  if (data.errors) {
    dispatch(setUser(null))
    return data;
  }

  dispatch(setUser(data))
  return {};
}

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json();
  dispatch(removeUser());
};


export const signUp = ({ email, first_name, last_name, zipcode, password }) => async (dispatch) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      first_name,
      last_name,
      zipcode,
      password,
    }),
  });
  const data = await response.json();
  // if (data.errors) {
  //   return data;
  // }
  if (data.errors) {
    dispatch(setUser(null))
    return data;
  }

  dispatch(setUser(data))
  return true;
}

export const editUserDetails = ({ email, first_name, last_name, zipcode, password }) => async (dispatch) => {
  const response = await fetch("/api/auth/signup", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      first_name,
      last_name,
      zipcode,
      password,
    }),
  });
  const data = await response.json();
  // if (data.errors) {
  //   return data;
  // }
  if (data.errors) {
    dispatch(setUser(null))
    return data;
  }

  dispatch(setUser(data))
  return true;
}



//---------------------------------------------------------------------------------------//
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload, loaded: true }
    case REMOVE_USER:
      return { ...state, user: null }
    default:
      return state;
  }
}
