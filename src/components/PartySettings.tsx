import { mdiChevronDoubleLeft } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import FormInput from './FormInput';
import { AddressForm } from './SaveTheDate';
import { H2, Paragraph } from './Typography';

const Container = tw.div``;
const BackButton = tw.button`flex flex-row justify-center  items-center mb-6 text-dark-gray hover:text-black`;
const SubmitButton = tw.button`h-12 w-full border rounded border-dark-gray mt-3 font-urbanist uppercase font-bold`;
const Label = tw.div`font-urbanist uppercase text-sm`;
const FormRow = styled.div`
  ${tw`flex flex-row`}
  & > div {
    ${tw`mr-3`}
  }
  & > div:last-of-type {
    ${tw`mr-0`}
  }
`;

interface PartySettingsProps {
  form: AddressForm;
  onChange: (
    type:
      | 'address1'
      | 'address2'
      | 'city'
      | 'state'
      | 'zipcode'
      | 'email'
      | 'country'
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
      <P>(to receive a formal invitation)</P>
      <Label>Your Party</Label>
      <Members>{partyMemberNames}</Members>
      <FormInput
        label="Email"
        value={form.email.value}
        onChange={onChange('email')}
        placeholder="e.g. hello@hotmail.com"
      />
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
          label="State / Province"
          value={form.state.value}
          onChange={onChange('state')}
          placeholder="e.g. CA, Samar, etc."
        />
        <FormInput
          label="Zip Code"
          value={form.zipcode.value}
          onChange={onChange('zipcode')}
          placeholder="e.g. 90210"
        />
      </FormRow>
      <FormInput
        label="Country"
        value={form.country.value}
        onChange={onChange('country')}
        placeholder="e.g. USA"
      />
      <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
    </Container>
  );
};

export default PartySettings;
