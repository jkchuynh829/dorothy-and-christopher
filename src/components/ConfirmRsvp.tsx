import React from 'react';
import ReactDOM from 'react-dom';
import tw, { styled } from 'twin.macro';
import { Aerotis, H1, Paragraph } from './Typography';

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
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Container className="confirm-rsvp" onClick={onClose}>
      <Box>
        <H1>
          <Aerotis>thank you</Aerotis>
        </H1>
        <Paragraph>Check your email for confirmation.</Paragraph>
      </Box>
    </Container>,
    document.body
  );
};

export default ConfirmRsvp;
