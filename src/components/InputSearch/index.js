import * as C from './styles'
import { RiUserSearchLine } from "react-icons/ri";
import { useState } from 'react';

export default function InputSearch({ onEnter, onReset }) {
  const [ inputText, setInputText ] = useState('');

  const handleKeyUp = (e) => {
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== '') {
      onEnter(inputText);
    }
  }

  function resetField(e) {
    e.preventDefault();

    onReset(setInputText(''));
  }

  return (
    <C.Container>
      <C.InputContainer>
        <RiUserSearchLine size="22" />
        <C.SearchInput
          type="text"
          placeholder="Endereço de carteira..."
          value={ inputText }
          onChange={ e => setInputText(e.target.value) }
          onKeyUp={ handleKeyUp }
        />
      </C.InputContainer>
      <C.ResetButton onClick={ resetField }>Limpar</C.ResetButton>
    </C.Container >
  )
}
