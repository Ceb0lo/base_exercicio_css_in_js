import styled from 'styled-components'
import { CorPrincipal, CorSecundaria } from '../../styles'

export const VagaLista = styled.li`
  border: 1px solid ${CorPrincipal};
  background-color: ${CorSecundaria};
  color: ${CorPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${CorPrincipal};
    color: ${CorSecundaria};
  }
`
export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const VagaLink = styled.a`
  border-color: ${CorSecundaria};
  background-color: ${CorPrincipal};
  color: ${CorSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }

  :hover {
    border-color: ${CorPrincipal};
    background-color: ${CorSecundaria};
    color: ${CorPrincipal};
  }
`
