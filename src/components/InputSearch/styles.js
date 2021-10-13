import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  
  svg {
    margin-left: 15px;
  }

  @media(max-width: 560px) { 
    flex-direction: column;
    margin-bottom: 32px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${ COLORS.lightBlack };
  border: 2px solid ${ COLORS.gray };
  border-radius: 10px;
`

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 20px;
  background: transparent;
  color: ${ COLORS.white };
  padding: 15px;
`

export const ButtonsContainer = styled.div`
  display: flex;

  @media(max-width: 560px) { 
    width: 100%;
    margin-top: 8px;
    gap: 10px;
  }
`

export const Button = styled.button`
  background-color: ${ props => props.backgroundColor };
  color: ${ COLORS.white };
  font-size: 20px;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid ${ COLORS.gray };
  opacity: .9;
  margin-left: 8px;
  transition: .15s;

  &:hover { 
    opacity: 1;
  }

  @media(max-width: 560px) { 
    width: 100%;
    margin-left: 0;
  }
`