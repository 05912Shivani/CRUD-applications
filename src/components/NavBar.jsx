import { AppBar,Toolbar,Typography,styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import App from '../App';
const Header= styled(AppBar)`
   background: #111111;
`
const Tabs=styled(NavLink)`
     font-size:20px;
     margin-right:20px;
     text-decoration:none;
     color:inherit;
`

const NavBar=()=>{
    return(
        <Header position='static'>
            <Toolbar>
            <Tabs to="./" exact>About</Tabs>
            <Tabs to="all" exact>All Users</Tabs>
            <Tabs to="add" exact>Add Users</Tabs>
            </Toolbar>
        </Header>
    )
}
export default NavBar;