import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormBox = styled(Form)`
  display: inline-block;
  min-width: 300px;
  padding: 24px;
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 2px 2px 5px grey;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
  color: #2db419;
`;

export const Input = styled(Field)`
  margin-top: 10px;

  padding: 8px;
  border: 1px solid gray;
  border-radius: 4px;
  transition: all 250ms;
  :focus,
  :hover {
    outline: none;
    border: 1px solid #2db419;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;
  transition: all 250ms;

  :hover {
    border: none;
    background-color: #9ae68e;
    border: 1px solid #9ae68e;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 16px;
  font-style: italic;
`;
