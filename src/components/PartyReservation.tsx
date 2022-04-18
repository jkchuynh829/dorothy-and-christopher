import { useCallback, useState } from 'react';
import tw, { styled } from 'twin.macro';
import FormRadioButton from './FormRadioButton';
import FormInput from './FormInput';
import { Paragraph } from './Typography';
import Select from 'react-select';
import { SingleValue } from 'react-select';

interface PartyReservationProps {
  party: Models.Party;
  guests: Models.Guest[];
  onSubmit: () => void;
}

// refactor below to use TS to extend Model.Guest but include only the boolean types
interface RadioButtonKeys {
  is_attending: string;
  is_vaccinated: string
}

interface OptionType {
  label: string;
  value: string;
}

const Container = tw.div`mt-28`;
const RadioContainer = tw.div`mt-2`

const GuestContainer = styled(Paragraph)`
    ${tw`text-xl mb-6`}
`

const FormRow = styled.div`
  ${tw`flex flex-row w-full`}
  & > div:last-of-type {
    ${tw`ml-3 w-full flex-1`}
  }
`;

const RadioButtonSelectionContainer = tw.div``

const mealOptions: OptionType[] = [
  { value: 'steak', label: 'Steak' },
  { value: 'chicken', label: 'Chicken' },
  { value: 'salmon', label: 'Salmon' },
];

const PartyReservation = ({
  party,
  guests,
  onSubmit,
}: PartyReservationProps) => {

  const [partyData, updatePartyData] =
    useState<Models.Party>(party);
  const [guestsData, updateGuestsData] =
    useState<Models.Guest[]>(guests);

  const booleanRadioChangeHandler = (guestId: Models.Guest['id'], guestBooleanProperty: string, checked: boolean) => {
    const guest = { ...guestsData.find((g) => g.id === guestId) } as Models.Guest
    if (guest.id == null) return;
    // guest.is_vaccinated = checked
    // type WritableKeys<T> = {
    // [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P>
    // }[keyof T];
    // guest[guestBooleanProperty as keyof ReadonlyGuest extends Omit<Models.Guest, 'id'>] = checked
    guest[guestBooleanProperty as keyof RadioButtonKeys] = checked
    const idx = guestsData.map(({ id }) => id).indexOf(guestId)
    if (idx === -1) return;
    const updatedGuestsData: Models.Guest[] = [...guestsData.slice(0)]
    updatedGuestsData[idx] = guest
    updateGuestsData(updatedGuestsData)
  }

  const allergiesInputChangeHandler = (guestId: Models.Guest['id']) => {
    return (value: string) => {
      const guestCopy = { ...guestsData.find((g) => g.id === guestId) } as Models.Guest
      if (guestCopy.id == null) return;

      guestCopy.allergies = value;
      const idx = guestsData.map(({ id }) => id).indexOf(guestId)
      if (idx === -1) return;
      const updatedGuestsData: Models.Guest[] = [...guestsData.slice(0)]
      updatedGuestsData[idx] = guestCopy
      updateGuestsData(updatedGuestsData)
    }
  }

  const mealSelectionChangeHandler = (guestId: Models.Guest['id']) => {
    return (option: SingleValue<OptionType>) => {
      const guest = { ...guestsData.find((g) => g.id === guestId) } as Models.Guest
      if (guest.id == null) return;

      guest.meal_preference = option?.value || '';
      const idx = guestsData.map(({ id }) => id).indexOf(guestId)
      if (idx === -1) return;
      const updatedGuestsData: Models.Guest[] = [...guestsData.slice(0)]
      updatedGuestsData[idx] = guest
      updateGuestsData(updatedGuestsData)
      console.log('GUESTSDATA AFTER MEAL SELECTION', guestsData)
    }
  }

  const songRequestsChangeHandler = (value: string) => {
    console.log('UPDATED PARTY DATA 1', partyData)
    const partyCopy = { ...partyData }
    partyCopy.song_requests = value;
    updatePartyData(partyCopy)
    console.log('UPDATED PARTY DATA 2', partyData)
    console.log('UPDATED PARTY COPY ', partyCopy)
  }

  return (
    <Container>
      {
        guestsData.map((guest) => {
          return <GuestContainer>
            <FormRow id={guest.id}>
              <Paragraph>
                {`${guest.first_name} ${guest.last_name}`}
              </Paragraph>
              <RadioButtonSelectionContainer>
                <Paragraph>
                  {'Attending?'}
                </Paragraph>
                <RadioContainer>
                  <FormRadioButton label='Yes' name={`${guest.id}_is_attending`} value='Yes' checked={guest.is_attending === true} onChange={() => booleanRadioChangeHandler(guest.id, 'is_attending', true)} />
                  <FormRadioButton label='No' name={`${guest.id}_is_attending`} value='No' checked={guest.is_attending === false} onChange={() => booleanRadioChangeHandler(guest.id, 'is_attending', false)} />
                </RadioContainer>
              </RadioButtonSelectionContainer>
              <RadioButtonSelectionContainer>
                <Paragraph>
                  {'COVID-19 Vaccinated?'}
                </Paragraph>
                <RadioContainer>
                  <FormRadioButton label='Yes' name={`${guest.id}_is_vaccinated`} value='Yes' checked={guest.is_vaccinated === true} onChange={() => booleanRadioChangeHandler(guest.id, 'is_vaccinated', true)} />
                  <FormRadioButton label='No' name={`${guest.id}_is_vaccinated`} value='No' checked={guest.is_vaccinated === false} onChange={() => booleanRadioChangeHandler(guest.id, 'is_vaccinated', false)} />
                </RadioContainer>
              </RadioButtonSelectionContainer>
              <FormInput
                label='Please list any dietary restrictions and/or dog allergies.'
                value={guest.allergies}
                onChange={allergiesInputChangeHandler(guest.id)}
              />
              <Select options={mealOptions} onChange={mealSelectionChangeHandler(guest.id)} />
            </FormRow>
          </GuestContainer>
        })
      }
      <FormInput
        label='Song Requests'
        value={party.song_requests}
        onChange={songRequestsChangeHandler}
      />
    </Container>
  )
}

export default PartyReservation;