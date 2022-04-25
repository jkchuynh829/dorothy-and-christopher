import React from 'react';
import tw from 'twin.macro';

const Label = tw.label`flex flex-row justify-center items-center mx-2 text-sm uppercase`;
const Input = tw.input`ml-2 form-radio border border-solid border-dark-gray`;

interface FormRadioInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (checked: boolean) => void;
  checked?: boolean;
}

const FormRadioButton = ({
  label,
  name,
  value,
  onChange,
  checked = false,
}: FormRadioInputProps) => {
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
