import React from 'react'

import { ButtonContainer } from './styles';

function Button({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
       Buscar Repositório
    </ButtonContainer>
  )
}

export default Button
