import React, { Component } from 'react';
import { Box, makeStyles, Button, Typography, Grid, Container, withStyles, Divider } from '@material-ui/core';
// import FacebookIcon from '@material-ui/icons/Facebook';
const styles = theme =>({
    root: {
        backgroundColor: 'white',
        margin: '9px 0px 9px 0px',
        padding: '10px 20px 10px 20px',
        borderRadius: '50px',
        '& :hover': {
            cursor: 'pointer'
        }
    },
    disabled: {
        backgroundColor: '#bdbdbd',
        color: '#757575'
    }
});

const url = {
    "tnp": 1,
    "gmail": 2,
    "facebook":3
}


class LoginButton extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {classes}=this.props;
        return(
            <React.Fragment>
                <Grid container className={`${classes.root} `+ (this.props.disabled?`${classes.disabled}`:'')} onClick={this.props.onClose}>
                    <Grid container className={classes.container}>
                        <Grid item xs={1}>
                            {/* <FacebookIcon /> */}
                        </Grid>
                        <Grid item xs={11} className={classes.item}>
                            <Typography>{this.props.title}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default LoginButton=withStyles(styles)(LoginButton)