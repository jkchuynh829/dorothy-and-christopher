import { mdiChevronDoubleLeft } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import FormInput from './FormInput';
import { AddressForm } from './SaveTheDate';
import { H2, Paragraph } from './Typography';

const Container = tw.div``;
const BackButton = tw.button`flex flex-row justify-center  items-center mb-6 text-dark-gray hover:text-black`;
const SubmitButton = tw.button`h-12 w-full border rounded border-dark-gray mt-3 font-urbanist`;
const Label = tw.div`font-urbanist uppercase text-sm`;
const FormRow = styled.div`
  ${tw`flex flex-row`}
  & > div:last-of-type {
    ${tw`ml-3`}
  }
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

const Heading = styled(H2)`
  ${tw`mb-0`}
`;
const P = styled(Paragraph)`
  ${tw`mb-7`}
`;
const Members = styled(Paragraph)`
  ${tw`text-xl mb-6`}
`;

const PartySettings = ({
  form,
  onChange,
  guests,
  goBack,
  onSubmit,
}: PartySettingsProps) => {
  const partyMemberNames = useMemo(
    () =>
      `${guests
        .map((guest) => `${guest.first_name} ${guest.last_name}`)
        .join(', ')}`,
    [guests]
  );
  return (
    <Container>
      <BackButton onClick={goBack}>
        <Icon path={mdiChevronDoubleLeft} size="16px" />
        Go Back
      </BackButton>
      <Heading>Please Submit Your Address</Heading>
      <P>(to send your invitation!)</P>
      <Label>Your Party</Label>
      <Members>{partyMemberNames}</Members>
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
      <FormInput
        label="City"
        value={form.city.value}
        onChange={onChange('city')}
        placeholder="e.g. Los Angeles"
      />
      <FormRow>
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
      <SubmitButton onClick={onSubmit}>Submit Address</SubmitButton>
    </Container>
  );
};

export default PartySettings;
