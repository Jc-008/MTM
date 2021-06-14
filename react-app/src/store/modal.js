const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL'
const CLOSE_EDIT_MODAL = 'CLOSE_EDIT_MODAL'

export const showEditModal = () => ({
  type: OPEN_EDIT_MODAL,

})

export const closeEditModal = () => ({
  type: CLOSE_EDIT_MODAL,

})


const initalState = {
  editModal: false,

}


export default function modalReducer(state = initalState, action) {

  switch (action.type) {
    case OPEN_EDIT_MODAL:
      return { editmodal: true }

    case CLOSE_EDIT_MODAL:
      return { editmodal: false }

    default:
      return state
  }
}
