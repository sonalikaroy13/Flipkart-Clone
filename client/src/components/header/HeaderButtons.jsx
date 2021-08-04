import { useState, useContext } from 'react';
import {Button, makeStyles, Box, withStyles, Typography, Badge} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//component
import LoginDialog from '../login/Login';
import {LoginContext} from '../../context/ContextProvider';
import Profile from './Profile';

const useStyle = makeStyles(theme => ({
    login: {
        background: '#ffffff',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none',
        [theme.breakpoints.down('sm')] : {
            background: '#2874f0',
            color: '#FFF'
        }
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff',
            [theme.breakpoints.down('sm')] : {
                color: '#2874f0',
                marginTop: 10
            }
        },
        [theme.breakpoints.down('sm')] : {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }
    }, 
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')] : {
            marginTop: 10
        }
    },
    cart: {
        marginLeft: 10
    }
}));


const HeaderButtons = () => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);

    const {cartItems } = useSelector(state => state.cart);

    const openLoginDialog = () => {
        setOpen(true);
    }
    
    return (
        <Box className={classes.wrapper}>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                <Link>
                    <Button variant="contained" onClick={()=> openLoginDialog()} className={classes.login}>Login</Button>
                </Link>
            }
            <Link><Typography style={{marginTop: 5}}>More</Typography></Link>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={cartItems.length} color="secondary"><ShoppingCart /></Badge> 
                <Typography className={classes.cart}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
        </Box>
    )
}

export default HeaderButtons;