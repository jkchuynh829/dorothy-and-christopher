import { createSlice } from '@reduxjs/toolkit';

interface RsvpProps {
  showRsvpModal: boolean;
}

const initialState: RsvpProps = {
  showRsvpModal: false,
};

const guestsSlice = createSlice({
  name: 'rsvp',
  initialState,
  reducers: {
    closeRsvpModal(state: any) {
      state.showRsvpModal = false;
    },
    openRsvpModal(state: any) {
      state.showRsvpModal = true;
    },
  },
  // extraReducers: (builder) => {

  // },
});

const { reducer: rsvp } = guestsSlice;

const { closeRsvpModal, openRsvpModal } = guestsSlice.actions;

export { rsvp, closeRsvpModal, openRsvpModal };
