import { useCallback, useState } from 'react';
import tw, { styled } from 'twin.macro';
import FormRadioButton from './FormRadioButton';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import { Paragraph } from './Typography';

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
// interface GuestRSVPForm {
// is_attending: boolean;
// meal_preference: string;
// allergies: string;
// }

// interface PartyForm {
// song_requests: string;
// }

// const initialGuestRSVPForm = {
// is_attending: false,
// meal_preference: '',
// allergies: ''
// }

// const GuestRSVPForm = () => {
// const [rsvpForm, updateGuestRSVPForm] = useState<GuestRSVPForm>(initialGuestRSVPForm);

// return <p></p>
// }

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

const PartyReservation = ({
  guests,
  onSubmit,
}: PartyReservationProps) => {

  const [guestsData, updateGuestsData] =
    useState<Models.Guest[]>(guests);

  console.log(guestsData);
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

  // const onChangeAddress = useCallback(
  // (
  // type:
  // | 'address1'
  // | 'address2'
  // | 'city'
  // | 'state'
  // | 'zipcode'
  // | 'country'
  // | 'email'
  // ) => {
  // const updatedForm = { ...addressForm };
  // return (value: string) => {
  // updatedForm[type].value = value;
  // updateAddressForm(updatedForm);
  // };
  // },
  // [addressForm]
  // );

  const allergiesInputChangeHandler = (guestId: Models.Guest['id']) => {
    return (value: string) => {
      const guest = { ...guestsData.find((g) => g.id === guestId) } as Models.Guest
      if (guest.id == null) return;

      guest.allergies = value;
      const idx = guestsData.map(({ id }) => id).indexOf(guestId)
      if (idx === -1) return;
      const updatedGuestsData: Models.Guest[] = [...guestsData.slice(0)]
      updatedGuestsData[idx] = guest
      updateGuestsData(updatedGuestsData)
      console.log('GUESTSDATA ', guestsData)
    }
  }

  return (
    <Container>
      {
        guestsData.map((guest) => {
          return <GuestContainer>
            {/*Insert name radio buttons, food choice selection here */}
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
              <FormSelect
                label='Meal Selection'
                onChange={() => { }}
              />
            </FormRow>
          </GuestContainer>
        })
      }
    </Container>
  )
}

export default PartyReservation;