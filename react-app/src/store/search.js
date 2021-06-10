const LOADRESULT = 'search/LOADRESULT'

const loadResult = products => ({
  type: LOADRESULT,
  payload: products
});





export const searchFunc = (query) => async dispatch => {      // param is the searchTerm that a person searches for

  const response = await fetch(`/api/search/${query}`);
  // /api/search/shirt
  if (response.ok) {
    const searchResults = await response.json();    // searchResult = jsonifed response from the fetch
    dispatch(loadResult(searchResults))
    return searchResults;
  }
}


//-------------------REDUCER--------------------------//          // will need to work on this bc changed routes
const searchReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case LOADRESULT:
      newState = Object.assign({}, state)
      newState.searchResults = action.payload
      return newState

    default:
      return { ...state };
  }
}

export default searchReducer;
