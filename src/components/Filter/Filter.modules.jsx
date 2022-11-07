import styled from 'styled-components';

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: #586570;
  text-decoration: underline;
  font-style: oblique;
`;

export const Input = styled.input`
  
  margin-bottom: 10px;
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