import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { irParaFeed, irParaLogin } from '../routes/coordinator'
import { useHistory } from 'react-router';

const Header = () => {
 const history = useHistory()

  return (
    
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={()=> irParaFeed(history)} color="inherit">Zap 2</Button>
          <Button onClick={()=>irParaLogin(history)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
   
  );
}
export default Header
