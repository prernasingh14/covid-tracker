import { useEffect, useState } from "react";
import React from 'react';
import {fetchDailyData} from '../../api/index';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart=()=>{
    const [dailyData,setDailyData]=useState([])
    // state={
    //     dailyData:{},
       useEffect(()=>{
           const fetchApi=async()=>{
            const fetchedDailyData = await fetchDailyData();

            setDailyData(fetchedDailyData);
               
           }
           console.log(dailyData);
           fetchApi();


       },[]);

       const lineChart=(
        (dailyData.length)?(<Line
           data={{
               labels:dailyData.map(({date})=>date),
               datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:'infected',
                borderColor:'#3333ff',
                fill:'true'

               },{

                data:dailyData.map(({deaths})=>deaths),
                label:'deaths',
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:'true'

               }],
            }}/>):null
       )

    return (
        <div className={styles.container}>
           {lineChart}
        </div>

    )
}


export default Chart;
