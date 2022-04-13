import React from 'react';
import tw, { styled } from 'twin.macro';
import { Paragraph } from './Typography';

const Container = tw.div``;
const Input = tw.input`border border-solid border-dark-gray shadow-input rounded-sm h-10 w-full px-3 mb-6 font-urbanist`;

const P = styled(Paragraph)`
  ${tw`uppercase text-sm`}
`;

interface FormInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const FormInput = ({ label, value, onChange, placeholder }: FormInputProps) => {
    return (
        <Container>
            <P>{label}</P>
            <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </Container>
    );
};

export default FormInput;
