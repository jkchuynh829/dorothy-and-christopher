import React from 'react';
import tw, { styled } from 'twin.macro';
import FormInput from './FormInput';
import { GuestSearchForm } from './SaveTheDate';

const Container = tw.div``;
const Results = tw.div`w-full flex flex-col`;
const ResultItem = tw.button`w-full flex-row text-left mb-2 text-lg cursor-pointer font-urbanist hover:opacity-35`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

interface GuestSearchProps {
  form: GuestSearchForm;
  searchResults: Models.Guest[];
  onChange: (type: 'lastName' | 'firstName') => (value: string) => void;
  selectParty: (id: string) => void;
}

const GuestSearch = ({
  form,
  searchResults,
  onChange,
  selectParty,
}: GuestSearchProps) => {
  return (
    <Container>
      <FormRow>
        <FormInput
          label="First Name"
          value={form.firstName.value}
          onChange={onChange('firstName')}
        />
        <FormInput
          label="Last Name"
          value={form.lastName.value}
          onChange={onChange('lastName')}
        />
      </FormRow>
      <Results>
        {searchResults.map((guest) => {
          return (
            <ResultItem
              key={guest.id}
              onClick={() => selectParty(guest.party_id)}
            >
              {guest.first_name} {guest.last_name}
            </ResultItem>
          );
        })}
      </Results>
    </Container>
  );
};

export default GuestSearch;
