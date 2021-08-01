
import { Box, makeStyles, Typography} from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';
import clsx from 'clsx';

const useStyle = makeStyles({
    component: {
        marginTop: 55,
        background: '#F2F2F2',
    },
    container: {
        margin: '0 80px',
        background: '#FFF',
        display: 'flex'
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14
    },
    greyTextColor: {
        color: '#878787'
    },
    price: {
        fontSize: 28
    }
})

const DetailView = ({ match }) => {
    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const { products } = useSelector(state => state.getProductDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(match.params.id));
    }, [dispatch])

    return (
        <Box className={classes.component}>  
            { products && Object.keys(products).length &&      
                <Box className={classes.container}>
                    <Box style={{ minWidth: '40%' }}>
                        gtdfrygtuk
                    </Box>
                    <Box className={classes.rightContainer}>
                        <Typography>{products.title.longTitle}</Typography>
                        <Typography  className={clsx(classes.smallText, classes.greyTextColor)}>
                            8 Ratings & 1 Review
                            <span><img src={fassured} style={{ width: 77, marginLeft: 20}}></img></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{products.price.cost}</span> &nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹{products.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                            <span style={{color: '#388E3C'}}>{products.price.discount} off</span>
                        </Typography>
                    </Box>
                    <Typography>Available offers</Typography>
                    <Box>
                        <Typography>Special PriceGet extra 10% off (price inclusive of discount)T&C</Typography>
                        <Typography>Bank Offer10% off on slice Visa card, up to ₹500. On orders of ₹1000 and aboveT&C</Typography>
                        <Typography>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</Typography>




Bank Offer20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and MobikwikT&C

Combo OfferBuy 2 items save 5%;Buy 3 or more save 10%See all productsT&C

Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition applyT&C

Bank Offer10% Off on First time ICICI Mastercard Credit Card transaction, Terms and Condition applyT&C

Bank OfferFlat ₹100 off on first Flipkart Pay Later order of ₹500 and aboveT&C
                    </Box> 
                </Box>
            }
        </Box>
    )
}

export default DetailView; 