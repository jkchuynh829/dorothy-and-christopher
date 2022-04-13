import React from 'react';
import tw, { styled } from 'twin.macro';
import { Paragraph } from './Typography';

const Label = tw.label`inline-flex items-center`
const Input = tw.input`form-radio`

const P = styled(Paragraph)`
  ${tw`uppercase text-sm`}
`;

interface FormRadioInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (checked: boolean) => void;
  checked?: boolean;
}

const FormRadioButton = ({ label, name, value, onChange, checked = false }: FormRadioInputProps) => {
  return (
    <Label>
      {label}
      <Input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e: any) => onChange(e.target.value)}
      />
    </Label>
  );
};

export default FormRadioButton;