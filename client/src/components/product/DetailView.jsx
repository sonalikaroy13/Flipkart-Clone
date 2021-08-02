
import { Box, makeStyles, Table, TableBody, TableRow, TableCell, Typography} from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';
import clsx from 'clsx';
import { LocalOffer as Badge } from '@material-ui/icons';

import ActionItems from './ActionItems';

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
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *': {
            fontSize: 14,
            marginTop: 10
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    price: {
        fontSize: 28
    },
    badge: {
        fontSize: 14,
        marginRight: 10,
        color: '#00CC00'
    }
})

const DetailView = ({ match }) => {
    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const { products } = useSelector(state => state.getProductDetails);

    const date = new Date(new Date().getTime() + (5*24*60*60*1000));  //inner bracket in milliseconds

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(match.params.id));
    }, [dispatch, products, match])

    return (
        <Box className={classes.component}>  
            { products && Object.keys(products).length &&      
                <Box className={classes.container}>
                    <Box style={{ minWidth: '40%' }}>
                        <ActionItems products={products} />
                    </Box>
                    <Box className={classes.rightContainer}>
                        <Typography>{products.title.longTitle}</Typography>
                        <Typography  className={clsx(classes.smallText, classes.greyTextColor)}>
                            8 Ratings & 1 Review
                            <span><img src={fassured} style={{ width: 77, marginLeft: 20}}/></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{products.price.cost}</span> &nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹{products.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                            <span style={{color: '#388E3C'}}>{products.price.discount} off</span>
                        </Typography>
                        <Typography style={{marginTop: 20, fontWeight: 600}}>Available offers</Typography>
                        <Box className={classes.smallText}>
                            <Typography><Badge className={classes.badge}/>Special Price: Get extra 10% off (price inclusive of discount)</Typography>
                            <Typography><Badge className={classes.badge}/>Bank Offer: 10% off on slice Visa card, up to ₹500. On orders of ₹1000 and above</Typography>
                            <Typography><Badge className={classes.badge}/>Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                            <Typography><Badge className={classes.badge}/>Combo Offer: Buy 2 items save 5%;Buy 3 or more save 10%See all products</Typography>
                            <Typography><Badge className={classes.badge}/>Bank Offer: Flat ₹100 off on first Flipkart Pay Later order of ₹500 and above</Typography>
                        </Box> 
                        <Table>
                            <TableBody>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                                    <TableCell style={{fontWeight: 600}}>{date.toDateString()} | ₹40</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                    <TableCell>No warranty</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                    <TableCell className={classes.smallText}>
                                        <span style={{color: '#2874F0'}}>SuperComNet</span>
                                        <Typography>GST Invoice Available</Typography>
                                        <Typography>14 Days Return Policy</Typography>
                                        <Typography>View more sellers starting from ₹300</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <img src={sellerURL} style={{ width: 390}}/>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Description</TableCell>
                                    <TableCell>{products.description}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>   
                </Box>
            }
        </Box>
    )
}

export default DetailView; 