import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  modalType: string | null;
}

const initialState: UIState = {
  isSidebarOpen: false,
  isModalOpen: false,
  modalType: '',
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    openModal: (state,action) => {
      state.isModalOpen = true;
      state.modalType = action.payload
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalType = null;
    },
  },
});

export const {
  toggleSidebar,
  openSidebar,
  closeSidebar,
  openModal,
  closeModal,
} = uiSlice.actions;

export default uiSlice.reducer;
