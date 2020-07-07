import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Weather({temp})
{
    return( 
    // <View style = {styles.container}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style = {styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style = {styles.halfContainer}>
            <MaterialCommunityIcons size={100} name = "weather-lightning-rainy" color="white"/>
            <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style = {styles.halfContainer}></View>

        </LinearGradient>
    // </View>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
      ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    temp: {
        fontSize: 50,
        color : "white"
    },

    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
});