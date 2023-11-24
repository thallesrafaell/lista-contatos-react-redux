import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
`

export const Inputs = styled.input`
  background-color: transparent;
  color: black;
  border: none;
  border-bottom: 2px solid black;
  height: 40px;
  font-size: 23px;
  text-indent: 20px;

  &::placeholder {
    color: black;
    font-size: 23px;
    text-indent: 20px;
  }

  &:focus {
    color: black;
    outline: none;
    font-size: 23px;
    text-indent: 20px;
  }
`
