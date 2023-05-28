import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Geolocation from 'react-native-geolocation-service';
//import AsyncStorage from "@react-native-async-storage/async-storage";


export default function LocationChild({ navigation }) {

  const [Lat, setLat] = useState()
  const [Long, setLong] = useState()

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool GPS Permission',
          message:
            'Cool Location App needs access to your GPS-module',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getLocation = ()=>{
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
  }

  //setInterval(getLocation, 15000);
  let D = Date.now()
  

  return (
    <View style={styles.container}>
      <Text>{Lat}, {Long}, {D}</Text>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})