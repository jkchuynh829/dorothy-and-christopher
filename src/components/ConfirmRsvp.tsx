import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from '../store';
import tw, { styled } from 'twin.macro';
import { Aerotis, H1, Paragraph } from './Typography';
import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';

const Container = tw.div`
  fixed w-full h-screen top-0 left-0 bg-modal-bg z-30
  flex justify-center items-center
`;

const Box = styled.div`
  ${tw`
    flex justify-center items-center flex-col w-96 h-96 bg-white rounded p-3 text-center
    md:w-5/6 md:h-5/6
  `}
  height: 25rem;
  width: 40rem;
  pointer-events: none;
`;

interface ConfirmRsvpPropsBase {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmRsvp = ({ isOpen, onClose }: ConfirmRsvpPropsBase) => {
  const { confirmationEmail, status } = useSelector((state) => state.rsvp);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Container className="confirm-rsvp" onClick={onClose}>
      <Box>
        {status === 'pending' ? (
          <>
            <H1>
              <Aerotis>sending confirmation...</Aerotis>
            </H1>
            <Icon path={mdiLoading} spin={1} size="32px" />
          </>
        ) : (
          <>
            <H1>
              <Aerotis>thank you</Aerotis>
            </H1>
            <Paragraph>{`Check your email [${confirmationEmail}] for your RSVP confirmation.`}</Paragraph>
          </>
        )}
      </Box>
    </Container>,
    document.body
  );
};

export default ConfirmRsvp;
