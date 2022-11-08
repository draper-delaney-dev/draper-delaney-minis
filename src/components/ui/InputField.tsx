import React from 'react';

type InputFieldProps = {
    classes: string,
    id: string,
    name: string,
    type: string,
    placeholder: string,
    value: string,
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputField = ({classes, id, name, type, placeholder, value, onBlur, onChange}: InputFieldProps) => {

    return (
        <input id={id} name={name} type={type} placeholder={placeholder} value={value} onBlur={onBlur} onChange={onChange} className={`drop-shadow-md w-full rounded p-1 hover:bg-slate-200 ${classes}`}/>
    );
};

export default InputField;