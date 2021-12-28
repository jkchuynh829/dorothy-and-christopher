import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../supabase';

const getGuests = createAsyncThunk('get/guests', async () => {
  const { data: guests, error } = await supabase
    .from('guests')
    .select('id, first_name, last_name, party_id, meal_preference');

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

const updatePartyAddress = createAsyncThunk(
  'update/parties/address',
  async ({
    id,
    address,
  }: {
    id: Models.Party['id'];
    address: Models.Party['address'];
  }) => {
    const { data, error } = await supabase
      .from('parties')
      .update({ address })
      .eq('id', id);

    console.log('data', data);
    console.log('error', error);
  }
);

interface GuestsProps {
  guests: Models.Guest[];
  parties: Models.Party[];
}

const initialState: GuestsProps = {
  guests: [],
  parties: [],
};

const guestsSlice = createSlice({
  name: 'guests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGuests.fulfilled, (state, { payload }) => {
      state.guests = payload.guests as Models.Guest[];
    });
    builder.addCase(getParties.fulfilled, (state, { payload }) => {
      state.parties = payload.parties as Models.Party[];
    });
  },
});

const { reducer: guests } = guestsSlice;

export { guests, getGuests, getParties, updatePartyAddress };
