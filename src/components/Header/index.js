import { Link } from 'react-router-dom';
import logoLoud from '../../assets/loud.svg';
import * as C from './styles';

export default function Header() {
  return (
    <C.HeaderContainer>
      <Link to='/'>
        <C.Logo src={ logoLoud } alt="logo" />
      </Link>
    </C.HeaderContainer>
  )
}
