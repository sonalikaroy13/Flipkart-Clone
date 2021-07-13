import { useState } from "react";
import { Box, Button, Dialog, DialogContent, makeStyles, TextField, Typography } from "@material-ui/core";

const useStyle = makeStyles({
    component: {
        height: '78vh',
        width: '95vh'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '78vh',
        backgroundRepeat: 'no-repeat',
        background: "#2874F0",
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *': {
            color: "#FFFFFF",
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    text: {
        color: "878787",
        fontSize: '12px'
    },
    loginBtn: {
        textTransform: 'none',
        background: "#FB641B",
        color: '#FFFFFF',
        height: 48,
        borderRadius: 2
    },
    requestBtn: {
        textTransform: 'none',
        background: "#FFFFFF",
        color: '#2874F0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    createText: {
        textAlign: 'center',
        marginTop: 'auto',
        fontSize: 14,
        color: '#2874F0',
        fontWeight: 600,
        cursor: 'pointer'
    }
})

const initialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Looks like youre new here!',
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const Login = ( {open, setOpen}) => {
    const classes = useStyle();

    const [account, setAccount] = useState(initialValues.login);

    const handleClose = () => {
        setOpen(false);
        setAccount(initialValues.login);
    } 

    const toggleAccount = () => {
        setAccount(initialValues.signup);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{display: 'flex'}}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                        <Box className={classes.login}>
                            <TextField name='username' label='Enter Email/Mobile number' />
                            <TextField name='password' label='Enter Password' />
                            <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button variant='contained' className={classes.loginBtn}>Login</Button>
                            <Typography style={{textAlign: 'center'}} className={classes.text}>OR</Typography>
                            <Button variant='contained' className={classes.requestBtn}>Request OTP</Button>
                            <Typography onClick={() => toggleAccount()} className={classes.createText}>New to Flipkart? Create an account</Typography>
                        </Box> : 
                        <Box className={classes.login}>
                            <TextField name='firstname' label='Enter FirstName' />
                            <TextField name='lastname' label='Enter LastName' />
                            <TextField name='username' label='Enter Username' />
                            <TextField name='email' label='Enter Email' />
                            <TextField name='password' label='Enter Password' />
                            <TextField name='phone' label='Enter Phone Number' />
                            <Button variant='contained' className={classes.loginBtn}>SignUp</Button>
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;