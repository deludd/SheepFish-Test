import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { StyledInput, StyledErrorMessage } from './styles';

const InputField = ({ label, name, type }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field as={StyledInput} type={type} id={name} name={name} />
    <ErrorMessage name={name} component={StyledErrorMessage} />
  </div>
);

export default InputField;
