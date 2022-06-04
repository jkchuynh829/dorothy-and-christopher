import { useState } from 'react';
import { useDispatch } from 'react-redux';
import tw from 'twin.macro';
import FormRadioButton from './FormRadioButton';
import FormInput from './FormInput';
import { Paragraph } from './Typography';
import Select from 'react-select';
import { SingleValue } from 'react-select';
import { openRsvpModal, updateRsvp } from '../store/rsvp';

interface PartyReservationProps {
  party: Models.Party;
  guests: Models.Guest[];
}

// refactor below to use TS to extend Model.Guest but include only the boolean types
interface RadioButtonKeys {
  is_attending: string;
  is_vaccinated: string;
}

interface OptionType {
  label: string;
  value: string;
}

const Container = tw.div`relative pb-16`;
const InputLabel = tw(Paragraph)`uppercase text-sm mb-0`;
const RadioContainer = tw.div`flex flex-row`;
const SubmitButton = tw.button`h-12 w-full border rounded border-dark-gray mt-3 font-urbanist uppercase font-bold hover:bg-green`;
const GuestContainer = tw(Paragraph)`text-xl mb-6`;
const FormRow = tw.div`flex flex-col w-full`;
const Section = tw.div`flex flex-row items-center justify-between mb-3`;
const CustomSelect = tw(Select)`uppercase text-sm`;

const mealOptions: OptionType[] = [
  { value: 'Beef/Salmon', label: 'Beef/Salmon' },
  { value: 'Vegetarian', label: 'Vegetarian' },
];

const PartyReservation = ({ party, guests }: PartyReservationProps) => {
  const dispatch = useDispatch();
  const [partyData, updatePartyData] = useState<Models.Party>(party);
  const [guestsData, updateGuestsData] = useState<Models.Guest[]>(guests);

  const booleanRadioChangeHandler = (
    guestId: Models.Guest['id'],
    guestBooleanProperty: string,
    checked: boolean
  ) => {
    const guest = {
      ...guestsData.find((g) => g.id === guestId),
    } as Models.Guest;
    if (guest.id == null) return;
    guest[guestBooleanProperty as keyof RadioButtonKeys] = checked;
    const idx = guestsData.map(({ id }) => id).indexOf(guestId);
    if (idx === -1) return;
    const updatedGuestsData: Models.Guest[] = [...guestsData.slice(0)];
    updatedGuestsData[idx] = guest;
    updateGuestsData(updatedGuestsData);
  };

  const allergiesInputChangeHandler = (guestId: Models.Guest['id']) => {
    return (value: string) => {
      const guestCopy = {
        ...guestsData.find((g) => g.id === guestId),
      } as Models.Guest;
      if (guestCopy.id == null) return;

      guestCopy.allergies = value;
      const idx = guestsData.map(({ id }) => id).indexOf(guestId);
      if (idx === -1) return;
      const updatedGuestsData: Models.Guest[] = [...guestsData.slice(0)];
      updatedGuestsData[idx] = guestCopy;
      updateGuestsData(updatedGuestsData);
    };
  };

  const mealSelectionChangeHandler = (guestId: Models.Guest['id']) => {
    return (option: SingleValue<OptionType>) => {
      const guest = {
        ...guestsData.find((g) => g.id === guestId),
      } as Models.Guest;
      if (guest.id == null) return;

      guest.meal_preference = option?.value || '';
      const idx = guestsData.map(({ id }) => id).indexOf(guestId);
      if (idx === -1) return;
      const updatedGuestsData: Models.Guest[] = [...guestsData.slice(0)];
      updatedGuestsData[idx] = guest;
      updateGuestsData(updatedGuestsData);
    };
  };

  const songRequestsChangeHandler = (value: string) => {
    const partyCopy = { ...partyData };
    partyCopy.song_requests = value;
    updatePartyData(partyCopy);
  };

  const partyEmailChangeHandler = (value: string) => {
    const partyCopy = { ...partyData };
    partyCopy.email = value;
    updatePartyData(partyCopy);
  };

  const onSubmit = () => {
    const rsvpData = {
      guestsRsvpData: guestsData.map((guestData) => {
        return {
          first_name: guestData.first_name,
          last_name: guestData.last_name,
          id: guestData.id,
          is_attending: guestData.is_attending,
          is_vaccinated: guestData.is_vaccinated,
          allergies: guestData.allergies,
          meal_preference: guestData.meal_preference,
        };
      }),
      partyRsvpData: {
        id: partyData.id,
        email: partyData.email,
        song_requests: partyData.song_requests,
      },
    };
    dispatch(updateRsvp(rsvpData));
  };

  return (
    <Container>
      {guestsData.map((guest) => {
        return (
          <GuestContainer key={guest.id}>
            <FormRow id={guest.id}>
              <Paragraph>{`${guest.first_name} ${guest.last_name}`}</Paragraph>
              <Section>
                <InputLabel>Attending?</InputLabel>
                <RadioContainer>
                  <FormRadioButton
                    label="Yes"
                    name={`${guest.id}_is_attending`}
                    value="Yes"
                    checked={guest.is_attending === true}
                    onChange={() =>
                      booleanRadioChangeHandler(guest.id, 'is_attending', true)
                    }
                  />
                  <FormRadioButton
                    label="No"
                    name={`${guest.id}_is_attending`}
                    value="No"
                    checked={guest.is_attending === false}
                    onChange={() =>
                      booleanRadioChangeHandler(guest.id, 'is_attending', false)
                    }
                  />
                </RadioContainer>
              </Section>
              <Section>
                <InputLabel>COVID-19 Vaccinated?</InputLabel>
                <RadioContainer>
                  <FormRadioButton
                    label="Yes"
                    name={`${guest.id}_is_vaccinated`}
                    value="Yes"
                    checked={guest.is_vaccinated === true}
                    onChange={() =>
                      booleanRadioChangeHandler(guest.id, 'is_vaccinated', true)
                    }
                  />
                  <FormRadioButton
                    label="No"
                    name={`${guest.id}_is_vaccinated`}
                    value="No"
                    checked={guest.is_vaccinated === false}
                    onChange={() =>
                      booleanRadioChangeHandler(
                        guest.id,
                        'is_vaccinated',
                        false
                      )
                    }
                  />
                </RadioContainer>
              </Section>
              <Section>
                <InputLabel>Meal Preference</InputLabel>
                <CustomSelect
                  options={mealOptions}
                  onChange={mealSelectionChangeHandler(guest.id)}
                  value={mealOptions.filter(
                    (option) => option.value === guest.meal_preference
                  )}
                />
              </Section>
              <Section>
                <FormInput
                  label="Please list any dietary restrictions and/or dog allergies."
                  value={guest.allergies}
                  onChange={allergiesInputChangeHandler(guest.id)}
                />
              </Section>
            </FormRow>
          </GuestContainer>
        );
      })}
      <FormInput
        label="Song Requests"
        value={partyData.song_requests}
        onChange={songRequestsChangeHandler}
      />
      <FormInput
        label="Email Address"
        value={partyData.email}
        onChange={partyEmailChangeHandler}
      />
      <SubmitButton
        onClick={() => {
          onSubmit();
          dispatch(openRsvpModal());
        }}
      >
        Submit RSVP
      </SubmitButton>
    </Container>
  );
};

export default PartyReservation;
