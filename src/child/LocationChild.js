import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Geolocation, { getCurrentPosition } from 'react-native-geolocation-service';
//import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

var a = 0

export default function LocationChild({ navigation }) {

  const [Lat, setLat] = useState();
  const [Long, setLong] = useState();
  const [accur, setAccur] = useState();
  const [altitu, setAltit] = useState();
  const [altitudeAccur, setAltitudeAccuracy] = useState();
  const [head, setHead] = useState();
  const [sp, setSp] = useState();
  const [timeSt, setTimeSt] = useState();

  const [location, setLocation] = useState(null);

  /*
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
    a}
  };
  */

  /*
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords);
        setLat(position.coords.latitude),
        setLong(position.coords.longitude),
        setAccur(position.coords.accuracy),
        setAltit(position.coords.altitude),
        setAltitudeAccuracy(position.coords.altitudeAccuracy),
        setHead(position.coords.heading),
        setSp(position.coords.speed),
        setTimeSt(position.coords.timeStamp)
        console.log(a)
        a++
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      }
    );
  };
  
  
  // Получение координат GPS
Geolocation.getCurrentPosition(
  position => {
    const { latitude, longitude } = position.coords;
    // Отправка координат на сервер
    fetch('http://192.168.1.4:11233/child', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ latitude, longitude }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  },
  error => {
    console.error(error);
  },
  { enableHighAccuracy: true, timeout: 5000, maximumAge: 10000 },
  );
  */
  
  //getLocation();
  //setInterval(getCurrentPosition, 15000);
  let D = Date(Date.now)
  
  const GPSLocation = () => {
    
  
    useEffect(() => {
      const interval = setInterval(() => {
        Geolocation.getCurrentPosition(
          (position) => {
            setLocation(position.coords);
          },
          (error) => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 10000 }
        );
      }, 15000);
      console.log(location)
      return () => clearInterval(interval);
    }, []);
  }
  
  GPSLocation();
   

  return (
    <View style={styles.container}>
      <Text>{location}, {location}, {D}</Text>  
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