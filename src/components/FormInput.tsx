import React from 'react';
import { animated } from 'react-spring';
import tw, { styled } from 'twin.macro';
import { Paragraph } from './Typography';

const Container = styled(animated(tw.div``))``;
const Input = tw.input`border border-solid border-dark-gray shadow-input rounded-sm h-10 w-full px-3 mb-6`;

const P = styled(Paragraph)`
  ${tw`uppercase text-sm`}
`;

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  style?: any;
  password?: boolean;
}

const FormInput = ({
  label,
  value,
  onChange,
  placeholder,
  style,
  password = false,
}: FormInputProps) => {
  return (
    <Container style={style}>
      <P>{label}</P>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={password ? 'password' : 'text'}
      />
    </Container>
  );
};

export default FormInput;
