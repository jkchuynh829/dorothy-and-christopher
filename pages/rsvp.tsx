import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import tw from 'twin.macro';
import ContentWrapper from '../src/components/ContentWrapper';
import { useSelector } from '../src/store';
import { getGuests, getParties, setSelectedParty } from '../src/store/guests';
import GuestSearch from '../src/components/GuestSearch';
import PartyReservation from '../src/components/PartyReservation';
import { GuestSearchForm } from '../src/components/SaveTheDate';

interface PartyRSVPForm {
  song_requests: string;
}

interface GuestRSVPForm {
  is_attending: boolean;
  is_vaccinated: boolean;
  meal_preference: string;
  allergies: string;
}

interface GuestRSVPData {
  data: GuestRSVPForm[]
}

interface RSVPForm {
  party_data: PartyRSVPForm;
  guests_data: GuestRSVPData
}

const initialSearchForm = {
  firstName: {
    value: '',
  },
  lastName: {
    value: '',
  },
};

const initialGuestRSVPData = []

const initialPartyRSVPForm = {
  song_requests: ''
}

const initialGuestRSVPForm = {
  is_attending: false,
  is_vaccinated: false,
  meal_preference: '',
  allergies: ''
}


// const Container = tw.div`relative w-full h-full`;
const Container = tw.div`relative w-full h-full mt-28`;
// const Container = tw.div`flex flex-col items-center overflow-hidden h-full`;

const Rsvp = () => {
  const dispatch = useDispatch();
  //dispatch(setSelectedParty(null))

  const guests = useSelector((state) => state.guests.guests);
  const parties = useSelector((state) => state.guests.parties);
  const selectedParty = useSelector((state) => state.guests.selectedParty);

  const [searchForm, updateSearchForm] = useState<GuestSearchForm>(initialSearchForm);
  const [searchResults, setSearchResults] = useState<Models.Guest[]>([]);


  // copied from SaveTheDate.tsx, should move to util file?
  const selectParty = useCallback((id: string) => {
    console.log('TRYNA SELECt PARTY')
    const party = parties.find((p) => p.id === id);
    if (party) {
      console.log('SETTING THE SELECTED PARTY')
      dispatch(setSelectedParty(party));
    }
  }, [parties, dispatch]);

  const onSubmit = useCallback(() => {
    console.log('hello')
  }, []);

  // const onSubmit = useCallback(() => {
  // if (!selectedParty) return;
  // const { address1, address2, city, state, zipcode, email, country } =
  // addressForm;
  // const address = `${address1.value} ${address2.value}, ${city.value}, ${state.value} ${zipcode.value} ${country.value}`;
  // dispatch(
  // updatePartyData({ id: selectedParty.id, email: email.value, address })
  // );
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [addressForm, selectedParty]);

  const onChangeSearch = useCallback(
    (type: 'lastName' | 'firstName') => {
      const updatedForm = { ...searchForm };
      return (value: string) => {
        updatedForm[type].value = value;
        updateSearchForm(updatedForm);
      }
    },
    [searchForm]
  );

  const partyGuests = useMemo(() => {
    if (selectedParty == null) return [];
    return guests.filter((guest) => guest.party_id === selectedParty.id);
  }, [guests, selectedParty]);

  useEffect(() => {
    dispatch(getGuests());
    dispatch(getParties());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const first = searchForm.firstName.value.toLowerCase();
    const last = searchForm.lastName.value.toLowerCase();

    const filteredGuests = guests.filter((guest) => {
      return (
        guest.first_name.toLowerCase().trim() === first.trim() ||
        guest.last_name.toLowerCase().trim() === last.trim()
      );
    });

    setSearchResults(filteredGuests);
  }, [searchForm, guests]);

  return (
    <Container>
      <ContentWrapper>
        {selectedParty ? (
          <PartyReservation
            party={selectedParty}
            guests={partyGuests}
            onSubmit={onSubmit}
          />
        ) : (
          <GuestSearch
            headerText='RSVP'
            form={searchForm}
            searchResults={searchResults}
            onChange={onChangeSearch}
            selectParty={selectParty}
          />
        )}
      </ContentWrapper>
    </Container>
  )
}

export default Rsvp;