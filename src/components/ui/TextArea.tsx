import React from 'react';

type TextAreaProps = {
  classes: string,
  id: string,
  name: string,
  placeholder: string,
  value: string,
  onBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

const TextArea = ({classes, id, name, placeholder, value, onBlur, onChange}: TextAreaProps) => {

  return (
    <textarea id={id} name={name} placeholder={placeholder} value={value} onBlur={onBlur} onChange={onChange} className={`drop-shadow-md max-w-full rounded p-1 hover:bg-slate-200 ${classes}`}/>
  );
};

export default TextArea;