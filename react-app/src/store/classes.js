export const GET_CLASSES = 'GET_CLASSES';
export const GET_ONE_CLASS = 'GET_CLASS';
export const SET_CLASSES = 'SET_CLASSES';
export const SET_CLASS = 'SET_CLASS';


export const getClasses = (classSessions) => ({
  type: GET_CLASSES,
  payload: classSessions
})

export const getAClass = (classSession) => ({
  type: GET_ONE_CLASS,
  payload: classSession
})

//---------------------------------------------------------------------------------------//

export const getAllClasses = () => async (dispatch) => {
  const response = await fetch('/api/classSessions/')

  if (!response.ok) {
    const errors = await response.json()
    return { errors }
  }

  const classSessions = await response.json()
  dispatch(getClasses(classSessions))
  return classSessions

}


export const getOneClass = (id) => async (dispatch) => {
  const response = await fetch(`/api/classSession/${id}/`)

  if (!response.ok) {
    const errors = await response.json()
    return { errors }
  }

  const classSession = await response.json()
  dispatch(getAClass(classSession))
  return classSession

}

//----------------------------------------------------------------------------------//
const initialState = {
  classSessions: {}
  // classSession = {},
}

// Check the reducer below, don't think it is correct

export default function classSessionReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case GET_CLASSES:
      newState = Object.assign({}, state)
      newState.classSessions = action.payload
      return newState

    case GET_ONE_CLASS:
      newState = Object.assign({}, state)
      newState.classSessions = action.payload
      return newState

    default:
      return state;
  }
}

  // switch (action.type) {
  //   case GET_CLASSES:
  //     return {
  //       classSessions: action.payload
  //     }
  //   case GET_ONE_CLASS:
  //     return {
  //       classSessions: action.payload
  //     }


  // }
// }
