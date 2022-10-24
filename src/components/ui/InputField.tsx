import React from 'react';

type Props = {
    classes: string,
    type: string,
    string: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputField = ({ classes, type, placeholder, value, onChange }: Props) => {

    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`drop-shadow-md max-w-full rounded p-1 hover:bg-slate-200 ${classes}`} />
    );
};

export default InputField;