import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Botao = styled(Link)`
  font-weight: 500;
  margin-bottom: 1.25rem;
  font-size: 1rem;
  padding: 12px 24px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6b6b;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e63946;
  }
`
