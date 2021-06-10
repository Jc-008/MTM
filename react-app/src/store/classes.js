export const GET_CLASSES = 'GET_CLASSES';
export const GET_CLASS = 'GET_CLASS';
export const SET_CLASSES = 'SET_CLASSES';
export const SET_CLASS = 'SET_CLASS';


export const getClasses = (classSessions) => ({
  type: GET_CLASSES,
  payload: classSessions
})

export const getClass = (classSession) => ({
  type: GET_CLASSES,
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


export const getOneClass = () => async (dispatch) => {
  const response = await fetch('/api/classSession/${id}/')

  if (!response.ok) {
    const errors = await response.json()
    return { errors }
  }

  const classSession = await response.json()
  dispatch(getClass(classSession))
  return classSession

}


const initalState = {
  classSessions = {},
  classSession = {},
}


export default function classSessionReducer(state = initalState, action) {
  switch (action.type) {
    case GET_CLASSES:
      return {
        classSessions: action.payload
      }
  }
}
