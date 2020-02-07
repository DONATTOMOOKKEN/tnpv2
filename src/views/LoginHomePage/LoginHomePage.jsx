import React, { Component } from 'react';
import { Box, makeStyles, Button, Typography, Grid, Container, withStyles, Link, Hidden } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import LoginButton from "./LoginButton";

export const styles = theme =>({
    root: {
        backgroundColor: 'red',
        height: '100vh'
    },
    title: {
        marginBottom: '40px',
        fontSize: '25px',
        '& sub': {
            fontSize: '10px'
        },
        '& .subtitle': {
            color: 'white'
        }
    },
    footer: {
        position: 'fixed',
        bottom: '0px',
        backgroundColor: 'rgba(0,0,0,.4)',
        padding: '10px 0px',
        '& .signupBottom': {
            color:'white'
        }
    },
    signup: {
        marginTop: '20px',
        color: 'white',
    }
})

class LoginHomePage extends Component {
    constructor(props){
        super(props);
        this.state= {
            snackbar: {
                open: false
            }
        }
    }
    snackbarClose() {
        this.setState(prevstate=>({
            ...this.state,
            snackbar: {
                open: false
            }
        }))
    }
    snackbarOpen() {
        this.setState(prevstate=>({
            ...this.state,
            snackbar: {
                open: true
            }
        }))
    }
    render() {
        const {classes}=this.props;
        return(
            <React.Fragment>
                <Grid container className={classes.root}>
                    <Grid container className={classes.container} justify="center" alignItems="center">
                        <Grid item xs={11} sm={6} md={4}>
                            <Grid container justify="center" className={classes.title}>
                                mace&nbsp;<Box className={"subtitle"}>tnp<sub>v2</sub></Box>
                            </Grid>
                            <Grid container justify="center">
                                <Grid item xs={12} sm={10}>
                                    <Grid container direction="column" alignItems="center">
                                        <LoginButton title="Login with tnp" url={"tnp"} />
                                        <LoginButton title="Login with Facebook" url={"facebook"} disabled onClose={()=>this.snackbarOpen()} />
                                        <LoginButton title="Login with Gmail" url={"gmail"} disabled onClose={()=>this.snackbarOpen()} />
                                        <Hidden xsDown>
                                            <Typography className={classes.signup}>New User? <Link href="#">&nbsp;Signup Here</Link></Typography>
                                        </Hidden>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Hidden smUp>
                        <Grid container className={classes.footer} justify="center" alignItems="center">
                            <Typography className={"signupBottom"}>New User? <Link href="#" onClick={()=>this.snackbarOpen()}>&nbsp;Signup Here</Link></Typography>
                        </Grid>
                    </Hidden>
                    <Snackbar
                        anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
                        key={`bottom center`}
                        open={this.state.snackbar.open}
                        onClose={()=>this.snackbarClose()}
                        message="Sorry, this service temporary not available !"
                    />
                </Grid>
            </React.Fragment>
        )
    }
}

export default LoginHomePage=withStyles(styles)(LoginHomePage)