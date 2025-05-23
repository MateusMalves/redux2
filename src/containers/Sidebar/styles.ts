import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Asside = styled.aside`
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    border-radius: 8px;
    box-shadow: none;
    background-color: #f9f9f9;
  }
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  padding-block: 1rem;
`
export const Search = styled.div`
  border: 1px solid ${variaveis.cor12};
  border-radius: 0.25rem;
  background-color: ${variaveis.cor11};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  text-align: left;
  input {
    border: none;
    padding: 0.5rem;
    background-color: ${variaveis.cor11};
    outline-style: none;
    font-size: 0.875rem;
  }
`

export const Lupa = styled.svg`
  color: #0d7cc4;
  height: 1rem;
  width: 1.5rem;
  display: flex;
  align-content: center;
`

export const MyCard = styled.div`
  border: 1px solid #222;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: #f2f2f2;
  font-size: 1.5rem;
  color: #5e5e5e;
`

export const BtnVoltar = styled.button`
  width: 325px;
  width: 100%;
  background-color: #c5233b;
  padding: 0.5rem 3.5rem;
  border-radius: 4px;
  font-weight: 500;
  color: white;
`
