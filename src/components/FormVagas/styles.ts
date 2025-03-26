import styled from 'styled-components'
import { CorPrincipal, CorSecundaria } from '../../styles'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${CorSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const BtnPesquisar = styled.button`
  background-color: ${CorPrincipal};
  border: 1px solid ${CorPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${CorSecundaria};
  margin-left: 8px;
  cursor: pointer;
`
export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${CorPrincipal};
`
