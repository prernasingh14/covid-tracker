import React from 'react';
import {Card,Typography,CardContent,Grid} from '@material-ui/core';
import Countup from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards=({ data: {confirmed,recovered,deaths,lastUpdate} } )=>{
   // console.log(confirmed);
   if(!confirmed)
    return 'Loading...';

else{

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                 <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                      <CardContent>
                          <Typography >
                                <Typography gutterBottom variant="h5" component="h2">
                                             Infected
                                 </Typography>
                                 <Typography variant="body2"  colr="textSecondary" component="p">
                                      <Countup start={0} end= {confirmed.value} duration={2.5} separator=","/>
                                  </Typography >
                                 <Typography variant="body2" colr="textSecondary">
                                           {new Date(lastUpdate).toDateString()}
                                  </Typography>
                                  <Typography variant="body2" colr="textSecondary">
                                           Number of active cases of Covid-19
                                  </Typography>
                          </Typography>
                       </CardContent> 
                 </Grid>
                 <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                      <CardContent>
                          <Typography >
                                <Typography gutterBottom variant="h5" component="h2">
                                             Recovered
                                 </Typography>
                                 <Typography variant="body2"  colr="textSecondary" component="p">
                                 <Typography variant="body2"  colr="textSecondary" component="p">
                                      <Countup start={0} end= {recovered.value} duration={2.5} separator=","/>
                                  </Typography >
                                  </Typography >
                                 <Typography variant="body2" colr="textSecondary">
                                     {new Date(lastUpdate).toDateString()}
                                  </Typography>
                                  <Typography variant="body2" colr="textSecondary">
                                           Number of recoveries from Covid-19
                                  </Typography>
                          </Typography>
                       </CardContent> 
                 </Grid>
                 <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                      <CardContent>
                          <Typography >
                                <Typography gutterBottom variant="h5" component="h2">
                                             Deaths
                                 </Typography>
                                 <Typography variant="body2"  colr="textSecondary" component="p">
                                      <Typography variant="body2"  colr="textSecondary" component="p">
                                          <Countup start={0} end= {deaths.value} duration={2.5} separator=","/>
                                       </Typography >
                                  </Typography >
                                 <Typography variant="body2" colr="textSecondary">
                                 {new Date(lastUpdate).toDateString()}
                                  </Typography>
                                  <Typography variant="body2" colr="textSecondary">
                                           Number of deaths due to  Covid-19
                                  </Typography>
                          </Typography>
                       </CardContent> 
                 </Grid>

            </Grid>
        </div>

    )
}
}


export default Cards;
