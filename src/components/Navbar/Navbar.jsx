import { AppBar ,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core';
import { AddShoppingCart, ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import React from 'react';
import logo from '../../assests/logo.png'
import useStyles from './styles';
const Navbar = ({totalItems}) => {
    const classes=useStyles();
  return (<div>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt='Commerce.js' height='25px' className={classes.image}/>
                    Commerce js
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label='Show cart Items' color='inherit'>
                           <Badge badgeContent={totalItems} color='secondary'>
                               <ShoppingCart/>
                           </Badge>
                    </IconButton>
                </div>
            </Toolbar>
      </AppBar>
  </div>);
};

export default Navbar;
