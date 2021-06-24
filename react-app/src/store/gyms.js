const GET_GYMS = 'GET_GYMS';
const GET_ONE_GYM = 'GET_ONE_GYM';
const CREATE_GYM = 'CREATE_GYM'
const DELETE_GYM = 'DELETE_GYM'
// const SET_CLASSES = 'SET_CLASSES';
// const SET_ONE_CLASS = 'SET_ONE_CLASS';


export const getGyms = (gyms) => ({
  type: GET_GYMS,
  gyms
})

export const getAGym = (gym) => ({
  type: GET_ONE_GYM,
  gym
})

export const createGym = (gym) => ({
  type: CREATE_GYM,
  gym
})

export const deleteAGym = () => ({
  type: DELETE_GYM,
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

export const createNewGym = (gymData) => async (dispatch) => {
  const { newGymName, newGymAddress, newGymPhoneNum, photo, lat, lng, gymOwnerId } = gymData

  const body = new FormData();

  body.append('photo', photo)     // appending to body array right?

  const imageResponse = await fetch('/api/gym/photo/', {
    method: "POST",     // why does it work without a header?
    body
  });

  const { photo_url } = await imageResponse.json()

  const response = await fetch('/api/gyms/add/', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      newGymName,
      newGymAddress,
      newGymPhoneNum,
      photo_url,
      lat,
      lng,
      gymOwnerId,
    })
  })

  if (response.ok) {
    const newGym = await response.json()
    dispatch(createGym(newGym))
  } else {
    return response
  }

}

export const deleteGym = (gymId) => async (dispatch) => {
  const response = await fetch(`/api/gyms/${gymId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ gymId })
  })

  if (!response.ok) {
    const errors = await response.json()
    return { errors }
  }

  dispatch(deleteAGym(gymId))

}


// export const getOneGym = (id) => async (dispatch) => {
//   const response = await fetch(`/api/gyms/${id}`)

//   if (!response.ok) {
//     const errors = await response.json()
//     return { errors }
//   }

//   const gym = await response.json()
//   dispatch(getAGym(gym))
//   return gym

// }


//----------------------------------------------------------------------------------//
const initialState = {
  allGyms: {},
  singleGym: null,
  loaded: false,
  // classSession = {},
}

export default function gymReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case GET_GYMS:
      // newState = Object.assign({}, state)
      // newState.gyms = action.payload

      // newState = { ...state }
      // newState.allGyms = action.gyms
      return { ...state, allGyms: { ...action.gyms }, loaded: true }

    case GET_ONE_GYM:
      newState = { ...state }
      newState.singleGym = newState.allGyms[action.gym] || null


    case CREATE_GYM:


    case DELETE_GYM:


      return newState

    default:
      return state;
  }
}
