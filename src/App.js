import React,{Component}from 'react';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import image from '../src/images/images.jpeg';
class App extends Component{
    state={
        data:{},
        country:''

    }
    
   async componentDidMount(){
       const fetchedData=await fetchData();
      // console.log(fetchedData);
       this.setState({data:fetchedData})
    }
    handleCountryChange=async (country)=>{
        //fetch the data 
        //set the state
        const fetchedData=await fetchData(country);
       this.setState({data:fetchedData,country:country});
       console.log(this.state)

    }
    render(){
        const {data,country}=this.state;
        return (
            <div>
                 <div className={styles.container}>
                          <img className={styles.image} src={image} alt="COVID-19" />
                               <Cards data={data}/>
                               <CountryPicker handleCountryChange={this.handleCountryChange}/>
                                <Chart data={data} country={country}/>
                 </div>
                         
           
              <div className={styles.footer} align="center">
              Made by Prerna (June 2020)
             </div>
        </div>

        );

    }
}

export default App;