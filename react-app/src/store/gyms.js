export const GET_GYMS = 'GET_GYMS';
export const GET_ONE_GYM = 'GET_ONE_GYM';
export const SET_CLASSES = 'SET_CLASSES';
export const SET_ONE_CLASS = 'SET_ONE_CLASS';


export const getGyms = (gyms) => ({
  type: GET_GYMS,
  gyms
})

export const getAGym = (gym) => ({
  type: GET_ONE_GYM,
  gym
})

//---------------------------------------------------------------------------------------//

export const getAllGyms = () => async (dispatch) => {
  const response = await fetch('/api/gyms/')

  if (!response.ok) {
    const errors = await response.json()
    return { errors }
  }

  const gyms = await response.json()
  dispatch(getGyms(gyms))
  return gyms

}


export const getOneGym = (id) => async (dispatch) => {
  const response = await fetch(`/api/gyms/${id}`)

  if (!response.ok) {
    const errors = await response.json()
    return { errors }
  }

  const gym = await response.json()
  dispatch(getAGym(gym))
  return gym

}


//----------------------------------------------------------------------------------//
const initialState = {
  // gyms: {},
  // gym: {},
  // classSession = {},
}

export default function gymReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case GET_GYMS:
      // newState = Object.assign({}, state)
      // newState.gyms = action.payload
      newState = { ...state }
      // newState.gym = action.gym
      newState = action.gyms
      return newState

    case GET_ONE_GYM:
      newState = { ...state }
      newState.gym = action.gym
      return newState

    default:
      return state;
  }
}
