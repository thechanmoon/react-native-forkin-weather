// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
// import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";


const API_KEY = "";

export default class extends React.Component {
  state = {
    isLoading: true
  };


  getWeather = async(latitude,longitude) => {
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    console.log(data);
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
    const {isLoading} = this.state;
    return (
      // isLoading? <Loading/> : null
      <Loading/>
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
