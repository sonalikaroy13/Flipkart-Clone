import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { ShoppingCart as Cart, FlashOn as Flash} from '@material-ui/icons';

const useStyle = makeStyles({
    leftContainer: {
        padding: '40px 0 0 80px'
    },
    image: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        height: 50,
        width: '46%',
        borderRadius: 2
    },
    addToCart: {
        background: '#FF9F00',
        color: '#FFF',
        marginRight: '2.5%'
    },
    buyNow: {
        background: '#fb641b',
        color: '#FFF'
    }
})


const ActionItems = ({ products }) => {

    const classes= useStyle();

    return (
        <Box className={classes.leftContainer}>
            <img src={products.detailUrl} className={classes.image}/>
            <Button variant="contained" className={clsx(classes.button, classes.addToCart)}><Cart />Add to Cart</Button>
            <Button variant="contained" className={clsx(classes.button, classes.buyNow)}><Flash />Buy Now</Button>
        </Box>
    )
}

export default ActionItems;