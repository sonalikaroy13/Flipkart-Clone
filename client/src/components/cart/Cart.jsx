import { useEffect } from 'react';
import {makeStyles, Box, Typography} from '@material-ui/core';
import { useSelector } from 'react-redux';

//components
import CartItem from './CartItem'

const useStyle = makeStyles({
    component: {
        marginTop: 55,
        padding: '30px 135px'
    },
    leftComponent: {
        width: '67%',
    },
    header: {
        padding: '15px 24px',
        background: '#FFF'
    }
})

const Cart = () => {
    const classes = useStyle();

    const { cartItems } = useSelector(state => state.cart);

    useEffect(() => {
        console.log(cartItems);
    })

    return (
        <Box>
            {
                cartItems.length ? 
                <Box className={classes.component}>
                    <Box className={classes.leftComponent}>
                        <Box className={classes.header}>
                            <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems.length})</Typography>
                        </Box>
                        {
                            cartItems.map(item => (
                                <CartItem item={item} />
                            ))
                        }
                    </Box>
                    <Box className={classes.rightComponent}>
                        
                    </Box>
                    <p>Hello value</p>
                </Box>
                : <p>Empty Cart</p>
            }
        </Box>
    )

}

export default Cart;