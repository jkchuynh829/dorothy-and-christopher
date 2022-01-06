import React, { useCallback, useEffect, useMemo, useState } from 'react';
import tw from 'twin.macro';
import ContentWrapper from './ContentWrapper';
import { useDispatch } from 'react-redux';
import { getGuests, getParties, updatePartyAddress } from '../store/guests';
import { useSelector } from '../store';
import PartySettings from './PartySettings';
import GuestSearch from './GuestSearch';

const initialSearchForm = {
  firstName: {
    value: '',
  },
  lastName: {
    value: '',
  },
};

const initialAddressForm = {
  email: {
    value: '',
  },
  address1: {
    value: '',
  },
  address2: {
    value: '',
  },
  city: {
    value: '',
  },
  state: {
    value: '',
  },
  zipcode: {
    value: '',
  },
  country: {
    value: '',
  },
};

interface FormField {
  value: string;
}

export interface GuestSearchForm {
  firstName: FormField;
  lastName: FormField;
}

export interface AddressForm {
  email: FormField;
  address1: FormField;
  address2: FormField;
  city: FormField;
  state: FormField;
  zipcode: FormField;
  country: FormField;
}

const Container = tw.div`w-full flex flex-col items-center overflow-hidden h-full`;

const SaveTheDate = () => {
  const dispatch = useDispatch();

  const guests = useSelector((state) => state.guests.guests);
  const parties = useSelector((state) => state.guests.parties);

  const [searchResults, setSearchResults] = useState<Models.Guest[]>([]);
  const [selectedParty, setSelectedParty] = useState<Models.Party | null>(null);

  const [searchForm, updateSearchForm] =
    useState<GuestSearchForm>(initialSearchForm);

  const onChangeSearch = useCallback(
    (type: 'lastName' | 'firstName') => {
      const updatedForm = { ...searchForm };
      return (value: string) => {
        updatedForm[type].value = value;
        updateSearchForm(updatedForm);
      };
    },
    [searchForm]
  );

  const selectParty = (id: string) => {
    const party = parties.find((p) => p.id === id);
    if (party) {
      setSelectedParty(party);
    }
  };

  const clearSelectedParty = () => {
    setSelectedParty(null);
  };

  const [addressForm, updateAddressForm] =
    useState<AddressForm>(initialAddressForm);

  const onChangeAddress = useCallback(
    (
      type:
        | 'address1'
        | 'address2'
        | 'city'
        | 'state'
        | 'zipcode'
        | 'country'
        | 'email'
    ) => {
      const updatedForm = { ...addressForm };
      return (value: string) => {
        updatedForm[type].value = value;
        updateAddressForm(updatedForm);
      };
    },
    [addressForm]
  );

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

  const partyGuests = useMemo(() => {
    if (selectedParty == null) return [];
    return guests.filter((guest) => guest.party_id === selectedParty.id);
  }, [guests, selectedParty]);

  const onSubmit = useCallback(() => {
    if (!selectedParty) return;
    const { address1, address2, city, state, zipcode } = addressForm;
    const address = `${address1.value} ${address2.value}, ${city.value}, ${state.value} ${zipcode.value}`;
    dispatch(updatePartyAddress({ id: selectedParty.id, address }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressForm, selectedParty]);

  return (
    <Container>
      <ContentWrapper>
        {selectedParty ? (
          <PartySettings
            form={addressForm}
            onChange={onChangeAddress}
            party={selectedParty}
            guests={partyGuests}
            goBack={clearSelectedParty}
            onSubmit={onSubmit}
          />
        ) : (
          <GuestSearch
            form={searchForm}
            searchResults={searchResults}
            onChange={onChangeSearch}
            selectParty={selectParty}
          />
        )}
      </ContentWrapper>
    </Container>
  );
};

export default SaveTheDate;
