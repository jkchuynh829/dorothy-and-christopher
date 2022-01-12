import React from 'react';
import ReactDOM from 'react-dom';
import tw, { styled } from 'twin.macro';
import { useSelector } from '../store';
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

const Address = styled(Paragraph)`
  font-size: 1.5rem;
`;

interface ModalPropsBase {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalPropsBase) => {
  const { confirmedAddress, recipient } = useSelector((state) => state.guests);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Container className="modal" onClick={onClose}>
      <Box>
        <H1>
          <Aerotis>thank you</Aerotis>
        </H1>
        <Paragraph>
          We&apos;ll send an invitation to the following address:
        </Paragraph>
        <Address>{confirmedAddress}</Address>
        <Paragraph>{`Check your email <${recipient}> for a confirmation.`}</Paragraph>
      </Box>
    </Container>,
    document.body
  );
};

export default Modal;
