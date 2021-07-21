import {Button, makeStyles, Box, withStyles, Typography} from '@material-ui/core';

//component
import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide';
import MidSection from './MidSection';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts as listProducts } from '../../redux/actions/productActions';
// import { products } from '../../constants/data';

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#f1f3f6'
    },
    rightwrapper: {
        background: '#FFFFFF',
        padding: 5,
        margin: '12px 0 0 10px',
        width: '17%'
    }
})

const Home = () => {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <Box>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{display: 'flex'}}>
                    <Box style={{width: '83%'}}>
                        <Slide 
                            timer={true}
                            title="Deal of the Day"
                            products={products}
                        />
                    </Box>
                    <Box className={classes.rightwrapper}>
                        <img src={adURL} style={{width:222, height: '100%'}}/>
                    </Box>
                </Box>
                <MidSection />
                <Slide 
                    timer={false}
                    title="Discounts for You"
                    products={products}
                />
                <Slide 
                    timer={false}
                    title="Suggested Items"
                    products={products}
                />
                <Slide 
                    timer={false}
                    title="Top Selection"
                    products={products}
                />
                <Slide 
                    timer={false}
                    title="Recommended Items"
                    products={products}
                />
                <Slide 
                    timer={false}
                    title="Best Sellers"
                    products={products}
                />       
            </Box>
        </Box>
    )

}

export default Home;