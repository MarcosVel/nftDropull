import { useState } from 'react';
import { RiUserSearchLine } from "react-icons/ri";
import { COLORS } from '../../utils/colors';
import * as C from './styles';

export default function InputSearch({ onEnter, onReset }) {
  const [ inputText, setInputText ] = useState('');

  const handleKeyUp = (e) => {
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== '') {
      onEnter(inputText);
    }
  }

  function searchUser(e) {
    e.preventDefault();

    inputText !== '' && onEnter(inputText);
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
      <C.ButtonsContainer>
        <C.Button onClick={ resetField } backgroundColor={ COLORS.lightBlack }>Limpar</C.Button>
        <C.Button onClick={ searchUser } backgroundColor={ COLORS.green }>Buscar</C.Button>
      </C.ButtonsContainer>
    </C.Container >
  )
}
