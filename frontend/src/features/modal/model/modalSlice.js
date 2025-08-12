import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  type: null,
  props: {},
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true
      state.type = action.payload.type
      state.props = action.payload.props || {}
    },
    closeModal: (state) => {
      state.isOpen = false
      state.type = null
      state.props = {}
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
export const selectModal = (state) => state.modal
