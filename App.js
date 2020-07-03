import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading";


export default function App() {
  return (
    <Loading> </Loading>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // flexDirection: "row",
    backgroundColor: "green",
    // alignItems: 'center',
    justifyContent: 'center',
  },
  yelloView:
  {
    flex: 1,
    backgroundColor: "yellow"  
  },

  blueView:
  {
    flex: 3,
    backgroundColor: "blue"
  },

  text: {
    color : "white",
    width : 100
  }

});
