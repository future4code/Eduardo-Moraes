import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { irParaFeed, irParaLogin } from '../../routes/coordinator'
import { useHistory } from 'react-router';

const Header = ({textoDoBotao, setTextoDoBotao}) => {
  const token = localStorage.getItem("token")
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem("token")
  }
  const acaoDoBotao = () => {
    if (token){
      logout()
      setTextoDoBotao("login")
      irParaLogin(history)
    }else {
      irParaLogin(history)
    }
  }

  return (
    
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={()=> irParaFeed(history)} color="inherit">Zap 2</Button>
          <Button onClick={acaoDoBotao} color="inherit">{textoDoBotao}</Button>
        </StyledToolbar>
      </AppBar>
   
  );
}
export default Header
