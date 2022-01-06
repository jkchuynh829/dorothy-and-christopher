import React from 'react';
import tw from 'twin.macro';
import FormInput from './FormInput';
import { GuestSearchForm } from './SaveTheDate';
import { H2, H5 } from './Typography';

const Container = tw.div`flex flex-col`;
const Results = tw.div`
  w-full flex flex-col flex-1 max-h-80
  overflow-scroll
  border border-solid border-dark-gray
  shadow-input rounded-sm p-3 min-h-160
`;
const ResultItem = tw.button`w-full flex-row text-left mb-2 text-lg cursor-pointer font-urbanist hover:opacity-35`;
const FormRow = tw.div`flex flex-col`;
const U = tw.span`border-b`;

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
      <H2>Submit Your Address</H2>
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
      {searchResults.length > 0 && (
        <H5>
          <U>Search Results</U>
        </H5>
      )}
      {searchResults.length > 0 && (
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
      )}
    </Container>
  );
};

export default GuestSearch;
