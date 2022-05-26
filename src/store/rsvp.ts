import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface GuestRsvpData {
  id: Models.Guest['id'];
  first_name: Models.Guest['first_name'];
  last_name: Models.Guest['last_name'];
  is_attending: Models.Guest['is_attending'];
  is_vaccinated: Models.Guest['is_vaccinated'];
  allergies: Models.Guest['allergies'];
  meal_preference: Models.Guest['meal_preference'];
}

export interface PartyRsvpData {
  id: Models.Party['id'];
  song_requests: Models.Party['song_requests'];
  email: Models.Party['email'];
}

export interface RsvpApiData {
  guestsRsvpData: GuestRsvpData[];
  partyRsvpData: PartyRsvpData;
}

interface RsvpProps {
  showRsvpModal: boolean;
  confirmationEmail: Models.Party['email'];
}

const initialState: RsvpProps = {
  showRsvpModal: false,
  confirmationEmail: '',
};

const updateRsvp = createAsyncThunk(
  'update/rsvp',
  async (rsvpData: RsvpApiData) => {
    await fetch('/api/rsvp', {
      method: 'POST',
      body: JSON.stringify(rsvpData),
    });
    return rsvpData;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(updateRsvp.fulfilled, (state, { payload }) => {
      state.confirmationEmail = payload.partyRsvpData.email
    });
  },
  // extraReducers: (builder) => {

  // },
});

const { reducer: rsvp } = guestsSlice;

const { closeRsvpModal, openRsvpModal } = guestsSlice.actions;

export { rsvp, closeRsvpModal, openRsvpModal, updateRsvp };
