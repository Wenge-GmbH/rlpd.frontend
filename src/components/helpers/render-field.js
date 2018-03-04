import React from 'react';

export const renderField = field => {
  const { touched, error } = field.meta;

  const className = `row justify-center flex-align-start ${touched && error ? 'has-danger': ''}`;
  return (
    <fieldset className={className}>
      <label>{field.label}</label>
      <input
        className='form-control'
        type={field.type || "text"}
        value={field.input.value || ""}
        {...field.input}
      />
      <p>{field.currentValue || ''}</p>
      <div className="text-help">
        {touched ? error : ''}
      </div>
    </fieldset>
  );
}
