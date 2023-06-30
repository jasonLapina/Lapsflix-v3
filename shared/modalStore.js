import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  movie: {
    title: "",
    poster_path: "",
    id: "",
    genre_ids: [],
    backdrop_path: "",
    overview: "",
    vote_average: 0,
    vote_count: 0,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      return {
        isOpen: true,
        movie: action.payload,
      };
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const modalStore = configureStore({
  reducer: {
    modal: modalSlice.reducer,
  },
});

export const { openModal, closeModal } = modalSlice.actions;
