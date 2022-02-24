import React from 'react';
import './Dashboard_Css/Home.css';
import logo from './img/HomeHero.jpg'
import Product from "./Product";
import {makeStyles} from "@material-ui/core/styles"
import {Grid, Paper }from "@material-ui/core"
import { mergeClasses } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
grid:{
   width: '100%',
   margin: '0px',
},
paper: {
   padding: theme.spacing(2),
   textAlign: 'center',
}
}));

function Home() {

   const classes = useStyles();

  return <div className='home'>
      <div className='home_container'>
         <img className='HeroImg' src={logo} alt={"logo"}/> 

         <Grid container spacing={2} className={classes.grid}>

         
         <Grid item xs={6} md={4}> 
            <Paper className={classes.paper}>
                  <Product 
                  id="18978"
                  title='The hitman startup glock'
                  price={59.99} 
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlvCMLUAWdLIbted8411LAxH-B3aRnwm8Wg&usqp=CAU" 
                  rating={5} />
            </Paper>
         </Grid>

          <Grid item xs={6} md={4}>
          <Paper className={classes.paper}>
            <Product 
            id="189768"
            title='The famous m4'
            price={179.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXxioD13XuPx2SiN4etozvh3CbB78sK1vwA&usqp=CAU" 
            rating={4}
            />
             </Paper>
          </Grid>

            <Grid item xs={6} md={4}>
            <Paper className={classes.paper}>
            <Product 
               id="92438"
               title='10 Grenades'
               price={2100}
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvE1KbM34LGMA1NcQW7sW5zhKvzAdxF5Vqg&usqp=CAU" 
               rating={2}
            />
             </Paper>
           </Grid>

            <Grid item xs={6} md={4}>
            <Paper className={classes.paper}>
            <Product 
               id="1898"
               title='The One tapper'
               price={179.99} 
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBEDSaHiJfA1v55Ukl6mNPK_5680kdZxDmRw&usqp=CAU" 
               rating={5}
            />
             </Paper>
            </Grid>

            <Grid item xs={6} md={4}>
            <Paper className={classes.paper}>
            <Product 
               id="209182"
               title='The Butterfly'
               price={549.99} 
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-MKlhBsiWf5mULfC1BtGSjj2_sKhO1c_Nw&usqp=CAU" 
               rating={4}
            />
             </Paper>
            </Grid>

            <Grid item xs={6} md={4}>
            <Paper className={classes.paper}>
            <Product 
               id="1899934"
               title='homemade catapult'
               price={35000} 
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-dzpVCFoR5xA59l0fB_njIlH9cTuVlEbdQ&usqp=CAU" 
               rating={5}
               />
                </Paper>
           </Grid>

            <Grid item xs={6} md={4}>
            <Paper className={classes.paper}>
            <Product 
               id="19354"
               title='Fighter Jet'
               price={300000} 
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMUe0-6yJtez3_NxItPsv-S42-S9l43E04mw&usqp=CAU"
               rating={5}
               />
                </Paper>
             </Grid>

            <Grid item xs={6} md={4}>
            <Paper className={classes.paper}>
            <Product 
               id="19354"
               title='Fighter Jet'
               price={300000} 
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMUe0-6yJtez3_NxItPsv-S42-S9l43E04mw&usqp=CAU"
               rating={5}
               />
                </Paper>
            </Grid>

            <Grid item xs={6} md={4}>
            <Paper className={classes.paper}>
            <Product 
               id="19354"
               title='Fighter Jet'
               price={300000} 
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMUe0-6yJtez3_NxItPsv-S42-S9l43E04mw&usqp=CAU"
               rating={5}
               />
                </Paper>
            </Grid>    
         </Grid>

      
      </div>   
  </div>;
}

export default Home;
