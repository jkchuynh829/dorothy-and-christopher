import { mdiCodeLessThan } from '@mdi/js';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Module } from 'module';
import supabase from '../supabase';

const getGuests = createAsyncThunk('get/guests', async () => {
  const { data: guests, error } = await supabase
    .from('guests')
    .select('id, first_name, last_name, party_id, is_attending, is_vaccinated, meal_preference, allergies');

  if (error) {
    throw new Error('Could not get guests data');
  }

  return { guests };
});

const getParties = createAsyncThunk('get/parties', async () => {
  const { data: parties, error } = await supabase
    .from('parties')
    .select('id, name, address, size, type');

  if (error) {
    throw new Error('Could not get parties data');
  }

  return { parties };
});

const updatePartyData = createAsyncThunk(
  'update/parties',
  async ({
    id,
    email,
    address,
  }: {
    id: Models.Party['id'];
    email: Models.Party['email'];
    address: Models.Party['address'];
  }) => {
    const { error } = await supabase
      .from('parties')
      .update({ email, address })
      .eq('id', id);

    if (error == null) {
      await fetch('/api/save-the-date-confirmation', {
        method: 'POST',
        body: JSON.stringify({
          to: email,
          subject: 'Address Received: Dorothy & Christopher’s Wedding',
          message: `Thank you for providing your mailing address! We will send a formal invitation to: ${address}. If you would like to make any changes, please resubmit your address using the form on our website: http://dorothyandchristopher.com. Feel free to respond to this email with any questions or concerns! With Love, Dorothy & Christopher.`,
          address,
        }),
      });
    }

    return { success: error == null, email, address };
  }
);

// {
// guests_rsvp_data: [
// {
// id,
// is_attending,
// is_vaccinated,
// allergies,
// meal_preference
// }
// ],
// party_rsvp_data: {
// song_requests
// }
// }

interface GuestRsvpData {
  id: Models.Guest['id'];
  is_attending: Models.Guest['is_attending'];
  is_vaccinated: Models.Guest['is_vaccinated'];
  allergies: Models.Guest['allergies'];
  meal_preference: Models.Guest['meal_preference'];
}

interface PartyRsvpData {
  id: Models.Party['id']
  song_requests: Models.Party['song_requests']
}
interface RsvpApiData {
  guestsRsvpData: GuestRsvpData[];
  partyRsvpData: PartyRsvpData;
}

const updateRsvp = createAsyncThunk(
  'update/rsvp',
  async (rsvpData: RsvpApiData) => {
    await fetch('/api/rsvp', {
      method: 'POST',
      body: JSON.stringify(rsvpData),
    });
  }
)
// const updateGuestRSVP = createAsyncThunk(
// 'rsvp/guest',
// async ({
// id,
// is_attending,
// is_vaccinated,
// allergies,
// meal_preference
// }: {
// id: Models.Guest['id'];
// is_attending: Models.Guest['is_attending'];
// is_vaccinated: Models.Guest['is_vaccinated'];
// allergies: Models.Guest['allergies'];
// meal_preference: Models.Guest['meal_preference'];
// }) => {
// const { error } = await supabase
// .from('guests')
// .update({ is_attending, is_vaccinated, allergies, meal_preference })
// .eq('id', id);
// }
// );

// const updatePartyRSVP = createAsyncThunk(
// 'rsvp/party',
// async ({
// id,
// song_requests
// }: {
// id: Models.Party['id']
// song_requests: Models.Party['song_requests']
// }) => {
// const { error } = await supabase
// .from('parties')
// .update({ song_requests })
// .eq('id', id)
// }
// );

interface GuestsProps {
  guests: Models.Guest[];
  parties: Models.Party[];
  updatePartySuccess: boolean;
  confirmedAddress?: string;
  recipient?: string;
  selectedParty: Models.Party | null;
}

const initialState: GuestsProps = {
  guests: [],
  parties: [],
  updatePartySuccess: false,
  selectedParty: null,
};

const guestsSlice = createSlice({
  name: 'guests',
  initialState,
  reducers: {
    closeModal(state) {
      state.updatePartySuccess = false;
    },
    setSelectedParty(state, action) {
      state.selectedParty = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGuests.fulfilled, (state, { payload }) => {
      state.guests = payload.guests as Models.Guest[];
    });
    builder.addCase(getParties.fulfilled, (state, { payload }) => {
      state.parties = payload.parties as Models.Party[];
    });
    builder.addCase(updatePartyData.fulfilled, (state, { payload }) => {
      state.updatePartySuccess = payload.success as boolean;
      state.confirmedAddress = payload.address;
      state.recipient = payload.email;
    });
  },
});

const { reducer: guests } = guestsSlice;

const { closeModal, setSelectedParty } = guestsSlice.actions;

export {
  guests,
  getGuests,
  getParties,
  updatePartyData,
  closeModal,
  setSelectedParty,
  updateRsvp
};
