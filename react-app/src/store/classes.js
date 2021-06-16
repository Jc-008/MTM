import { createReservation, deleteReservation } from "./session";

const GET_CLASSES = 'GET_CLASSES';
const GET_ONE_CLASS = 'GET_CLASS';
// const CREATE_RESERVATION = 'CREATE_RESERVATION'
const SET_CLASSES = 'SET_CLASSES';
const SET_CLASS = 'SET_CLASS';


export const getClasses = (classSessions) => ({
  type: GET_CLASSES,
  classSessions
})

export const getAClass = (classSession) => ({
  type: GET_ONE_CLASS,
  classSession
})

// export const createReservation = (reservation) => ({
//   type: CREATE_RESERVATION,
//   reservation
// })

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

export const makeReservation = (classSessionId) => async (dispatch) => {
  const response = await fetch('/api/classSessions/reservation/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ classSessionId })

  })

  if (!response.ok) {
    const errors = await response.json()
    return { errors }
  }

  const reservation = await response.json()
  console.log(reservation, '..... res')
  dispatch(createReservation(reservation, classSessionId))
  return reservation
}

export const removeReservation = (reservationId) => async (dispatch) => {
  const response = await fetch('/api/classSessions/reservation/', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reservationId })

  })

  if (!response.ok) {
    const errors = await response.json()
    return { errors }
  }

  const reservation = await response.json()
  dispatch(deleteReservation(reservationId))
  return reservation
}



// export const getOneClass = (id) => async (dispatch) => {
//   const response = await fetch(`/api/classSession/${id}/`)

//   if (!response.ok) {
//     const errors = await response.json()
//     return { errors }
//   }

//   const classSession = await response.json()
//   dispatch(getAClass(classSession))
//   return classSession

// }




//----------------------------------------------------------------------------------//
const initialState = {
  allClassSessions: {},
  singleClassSession: null,
  // loaded: false,
  // singleClassSession: {},
}

// Check the reducer below, don't think it is correct

export default function classSessionReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case GET_CLASSES:
      newState = { ...state }
      newState.allClassSessions = action.classSessions
      return newState
    // return { ...state, allClassSessions: { ...action.classSessions }, loaded: true }


    case GET_ONE_CLASS:
      newState = { ...state }
      newState.singleClassSession = newState.allClassSessions[action.classSession]
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
