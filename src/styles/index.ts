import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  body {
    bakground-color: #f0f0f0;
  }
`
export const Botao = styled.button`
  diplay:flex;
  justify-content: center;
  align-items:center
  padding: 8px;
  background: black;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid transparent;
  border-radius: 4px;
  height: 40px;
  width: 40px;
  animation: ease-in;
  transition-duration: 0.5s;

  &:hover {
    border: 2px solid black;
    color: black;
    background: white;
    transition-duration: 0.5s;
  }
`
