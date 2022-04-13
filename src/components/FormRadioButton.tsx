import React from 'react';
import tw, { styled } from 'twin.macro';
import { Paragraph } from './Typography';

const Container = tw.div`form-check form-check-inline`;
// const Input = tw.input`type=border border-solid border-dark-gray shadow-input rounded-sm h-10 w-full px-3 mb-6 font-urbanist`;
const Input = tw.input`form-radio`

const P = styled(Paragraph)`
  ${tw`uppercase text-sm`}
`;

interface FormRadioInputProps {
  label: string;
  value: boolean;
}

const FormRadioButton = ({ label, value }: FormRadioInputProps) => {
  return (
    <Container>
      <P>{label}</P>
      <Input
        value={'false'}//{value}
      />
    </Container>
  );
};

export default FormRadioButton;