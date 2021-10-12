import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  
  svg {
    margin-left: 15px;
  }

  @media(max-width: 460px) { 
    flex-direction: column;
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

export const ResetButton = styled.button`
  background-color: ${ COLORS.lightBlack };
  color: ${ COLORS.white };
  font-size: 20px;
  border: none;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid ${ COLORS.gray };
  opacity: .7;
  margin-left: 8px;

  &:hover { 
    opacity: 1;
  }

  @media(max-width: 460px) { 
    width: 100%;
    margin-top: 8px;
    margin-left: 0;
  }
`