
import { AppBar, Toolbar, styled, Button,Fab } from '@mui/material'; 
import { Link } from 'react-router-dom';
import { Home, Call, MenuBook, Logout } from '@mui/icons-material';


import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
   
`

const Anchor=styled(Link)(({ theme }) => ({
    padding: '20px 60px',
        textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
        padding: '20px 25px',
        textDecoration: 'none'
    }
}));



const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                {/* <Link to='/'>
                    <Home/> </Link>
                <Link to='/about'><MenuBook/></Link>
                <Link to='/contact'><Call/></Link>
                <Link to='/login'><Logout/></Link> */}
             <Anchor to='/'>  <Fab size="small" color="secondary">
  <Home />
</Fab>
</Anchor> 

<Anchor to='/about'>  <Fab size="small" color="secondary">
  <MenuBook />
</Fab>
</Anchor>
<Anchor to='/contact'>  <Fab size="small" color="secondary">
  <Call />
</Fab>
</Anchor>
<Anchor to='/login'>  <Fab size="small" color="secondary">
  <Logout />
</Fab>
</Anchor>

            </Container>
        </Component>

        
    )
}

export default Header;