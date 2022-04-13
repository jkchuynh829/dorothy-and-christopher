import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import FormRadioButton from './FormRadioButton';
import { Paragraph } from './Typography';

interface PartyReservationProps {
  party: Models.Party;
  guests: Models.Guest[];
  onSubmit: () => void;
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

const GuestContainer = styled(Paragraph)`
    ${tw`text-xl mb-6`}
`

const FormRow = styled.div`
  ${tw`flex flex-row w-full`}
  & > div:last-of-type {
    ${tw`ml-3 w-full flex-1`}
  }
`;

const RadioButtonSelectionContainer = tw.div``//`form-check form-check-inline`

const PartyReservation = ({
  guests,
  onSubmit,
}: PartyReservationProps) => {

  return (
    <Container>
      {
        guests.map((guest) => {
          return <GuestContainer>
            {/*Insert name radio buttons, food choice selection here */}
            <FormRow>
              <Paragraph>
                {`${guest.first_name} ${guest.last_name}`}
              </Paragraph>
              <RadioButtonSelectionContainer>
                <Paragraph>
                  {'COVID-19 Vaccinated?'}
                </Paragraph>
                <FormRadioButton label={'Yes'} value={true} />
                <FormRadioButton label={'No'} value={true} />
              </RadioButtonSelectionContainer>
            </FormRow>
          </GuestContainer>
        })
      }
    </Container>
  )
}

export default PartyReservation;