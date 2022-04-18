import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import tw, { styled } from 'twin.macro';
import FormRadioButton from './FormRadioButton';
import FormInput from './FormInput';
import { Paragraph } from './Typography';
import Select from 'react-select';
import { SingleValue } from 'react-select';
// import { updateGuestRSVP, updatePartyRSVP } from '../store/guests';
import { updateRsvp } from '../store/guests';
import { mdiContentSaveOutline } from '@mdi/js';

interface PartyReservationProps {
  party: Models.Party;
  guests: Models.Guest[];
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
const RadioContainer = tw.div`mt-2`;
const SubmitButton = tw.button`h-12 w-full border rounded border-dark-gray mt-3 font-urbanist uppercase font-bold hover:bg-green`;

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
}: PartyReservationProps) => {

  const dispatch = useDispatch();
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

  // const onSubmit = useCallback(() => {
  // guestsData.forEach((guest) => {
  // const { id, is_attending, is_vaccinated, allergies, meal_preference } = guest;
  // dispatch(updateGuestRSVP(guest))
  // });
  // const { song_requests } = partyData;
  // dispatch(updatePartyRSVP)
  // }, [guests, party]);


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

  const onSubmit = () => {
    // guestsData.forEach((guest) => {
    // const { id, is_attending, is_vaccinated, allergies, meal_preference } = guest;
    // dispatch(updateGuestRSVP(guest))
    // });
    // const { song_requests } = partyData;
    // dispatch(updatePartyRSVP)

    console.log('GUESTDATA ', guestsData)
    console.log('PARTYDATA ', partyData)
    const rsvpData = {
      guestsRsvpData: guestsData.map((guestData) => {
        return {
          id: guestData.id,
          is_attending: guestData.is_attending,
          is_vaccinated: guestData.is_vaccinated,
          allergies: guestData.allergies,
          meal_preference: guestData.meal_preference
        }
      }),
      partyRsvpData: {
        id: partyData.id,
        song_requests: partyData.song_requests
      }
    }
    dispatch(updateRsvp(rsvpData))
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
      <SubmitButton onClick={onSubmit}>Submit RSVP</SubmitButton>
    </Container>
  )
}

export default PartyReservation;