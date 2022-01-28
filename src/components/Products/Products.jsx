import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
// const products=[
//     {id:1,name:"Shoes",description:"Riunning Shoes",price:"$500",image:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"},
//     {id:2,name:"Shoes",description:"Nike Shoes",price:"$600",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"},
//     {id:3,name:"Shoes",description:"Adidas Shoes",price:"$600",image:"https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
// ]
export default function Products({products,onAddToCart}) {
    const classes=useStyles();
    return( <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify='center' spacing={4}>
           {products.map(product=>
           
               <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                   <Product product={product} onAddToCart={onAddToCart}/>
               
               </Grid>
           )};
        </Grid>
    </main>
  );
}
