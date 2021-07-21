import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Box, Button, Divider, makeStyles, Typography } from '@material-ui/core';
import Countdown from "react-countdown";
import React from 'react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const useStyle = makeStyles({
    component: {
        marginTop: 12,
        background: '#FFFFFF',
    },
    deal: {
        padding: '15px 20px',
        display: 'flex'
    },
    dealtext: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    timer: {
        color: '#7F7F7F',
        marginLeft: 10,
        alignItems: 'center',
        display: 'flex'
    },
    image: {
        height: 150
    },
    button: {
        marginLeft: 'auto',
        background: '#2874F0',
        borderRadius: '2px',
        fontSize: '13px'
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    wrapper: {
        padding: "35px 15px"
    }
})

const Slide = ({timer, title, products}) => {
    const classes = useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    
    const renderer = ({ hours, minutes, seconds }) => {
        // Render a countdown
        return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left</span>;
    };
    
    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealtext}>{title}</Typography>
                {
                    timer &&
                    <React.Fragment>
                        <img src= {timerURL} style={{width: 24}} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
                        <Button variant="contained" color="primary" className={classes.button}>View All</Button> 
                    </React.Fragment>
                }
                </Box>
            <Divider />
            <Carousel
                responsive={responsive}
                infinite = {true}
                draggable = {false}
                swipeable = {false}
                centerMode = {true}
                autoPlay = {true}
                autoPlaySpeed = {10000}
                keyBoardControl = {true}
                showDots = {false}
                removeArrowOnDeviceType = {["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map(products => (
                        <Box textAlign="center" className={classes.wrapper}>
                            <img src = {products.url} className={classes.image}/>
                            <Typography className={classes.text} style={{fontWeight: 600, color: '#212121'}}>{products.title.shortTitle}</Typography>
                            <Typography className={classes.text} style={{color: 'green'}}>{products.discount}</Typography>
                            <Typography className={classes.text} style={{color: '#212121', opacity: '.6'}}>{products.tagline}</Typography>
                        </Box>
                    ))
                }
            </Carousel> 
        </Box>
    )
}

export default Slide;