export const FETCH_CLASSES = 'FETCH_CLASSES';
export const FETCH_CLASS = 'FETCH_CLASS';
export const SET_CLASSES = 'SET_CLASSES';
export const SET_CLASS = 'SET_CLASS';


export const fetchClasses = (classSessions) => ({
  type: FETCH_CLASSES,
  payload: classSessions
})

export const fetchClass = (classSession) => ({
  type: FETCH_CLASSES,
  payload: classSession
})

//---------------------------------------------------------------------------------------//

export const getAllClasses = () => async (dispatch) => {
  const response = await fetch('/api/classes')

  if (!response.ok) {
    const errors = await response.json()
    return { errors }
  }

  const classes = await response.json()
  dispatch(fetchClasses(classSessions))
  return classSessions

}


export const getOneClass = () => async (dispatch) => {
  const response = await fetch('/api/classes/${')

  if (!response.ok) {
    const errors = await response.json()
    return { errors }
  }
}
