// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
// import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather"


const API_KEY = "";

export default class extends React.Component {
  state = {
    isLoading: true,
    temp: 0
  };


  getWeather = async(latitude,longitude) => {
    // const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`)
    // console.log('data : ' , data);
    // console.log('data.main.temp : ' , data.main.temp);
    // console.log('data.weather : ', data.weather);
    // this.setState({isLoading: false, condition:data.weather[0].main, temp: data.main.temp})
  
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=imperial`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  
  }

  getLocation = async() =>{
    try{
      // const response = Location.requestPermissionsAsync();
      // console.log(response);
      // throw Error();
      await Location.requestPermissionsAsync();

      // const {coords} = await Location.getCurrentPositionAsync();
      // console.log(coords.latitude, coords.longitude);
      const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
      this.setState({isLoading:false});
    }catch(error)
    {
      Alert("Request Permission error : ", error)
    }
  }

  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp, condition } = this.state;
    // console.log('temp : ',temp);
    // console.log('isLoading : ',isLoading);
    return (
      isLoading? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>
      // isLoading? <Loading/> : null

      // <Loading/>
      // <View style={styles.container}>
      //   <Text style={styles.text}>Hi JW!!</Text>
      //   <Text>My Son, JW, Mom and father Love you!!.</Text>
      //   <Text>Time to study math</Text>
      //   <Text>When you finish making tea for mom, plz come to study !!!</Text>
      //   <StatusBar style="auto" />
      // </View>
      // <View style={styles.container}>
      //   <View style={styles.yelloView}>
      //     {/* <Text>Hello</Text> */}
      //   </View>
      //   <View style={styles.blueView}>
      //     {/* <Text>Hello</Text> */}
      //   </View>
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#fff',
//     // flexDirection: "row",
//     backgroundColor: "green",
//     // alignItems: 'center',
//     justifyContent: 'center',
//   },
//   yelloView:
//   {
//     flex: 1,
//     backgroundColor: "yellow"  
//   },

//   blueView:
//   {
//     flex: 3,
//     backgroundColor: "blue"
//   },

//   text: {
//     color : "white",
//     width : 100
//   }

// });
