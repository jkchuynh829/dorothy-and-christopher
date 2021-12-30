import React from 'react';
import tw, { styled } from 'twin.macro';
import FormInput from './FormInput';
import { AddressForm } from './SaveTheDate';
import { Paragraph } from './Typography';

const Container = tw.div``;
const BackButton = tw.button``;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

interface PartySettingsProps {
  form: AddressForm;
  onChange: (
    type: 'address1' | 'address2' | 'city' | 'state' | 'zipcode'
  ) => (value: string) => void;
  goBack: () => void;
  party: Models.Party;
  guests: Models.Guest[];
  onSubmit: () => void;
}

const PartySettings = ({
  form,
  onChange,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  party,
  guests,
  goBack,
  onSubmit,
}: PartySettingsProps) => {
  return (
    <Container>
      <BackButton onClick={goBack}>Go Back</BackButton>
      <FormRow>
        <FormInput
          label="Address"
          value={form.address1.value}
          onChange={onChange('address1')}
          placeholder="e.g. 423 Anacapa View Dr"
        />
        <FormInput
          label="Unit No (Optional)"
          value={form.address2.value}
          onChange={onChange('address2')}
          placeholder="e.g. APT 101"
        />
      </FormRow>
      <FormRow>
        <FormInput
          label="City"
          value={form.city.value}
          onChange={onChange('city')}
          placeholder="e.g. Los Angeles"
        />
        <FormInput
          label="State"
          value={form.state.value}
          onChange={onChange('state')}
          placeholder="e.g. CA"
        />
        <FormInput
          label="Zip Code"
          value={form.zipcode.value}
          onChange={onChange('zipcode')}
          placeholder="e.g. 90210"
        />
      </FormRow>
      <button onClick={onSubmit}>Submit Address</button>
      {guests.map((guest) => (
        <Paragraph key={guest.id}>
          {guest.first_name} {guest.last_name}
        </Paragraph>
      ))}
    </Container>
  );
};

export default PartySettings;
