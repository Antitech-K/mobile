import React from "react";
import {StatusBar } from "react-native";
import  Navigator from "./src/Navigator";
import { NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Orientation from 'react-native-orientation-locker';



const App = () => {  
  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@type')
      if(value !== null) {
        console.log(value, "App")
      // value previously stored
      }
    } catch(e) {
      console.log("reading error")
      alert("Ошибка чтения памяти");
      // error reading value
    }
  }

  getData();

  Orientation.lockToPortrait(); //this will lock the view to Portrait

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={null}></StatusBar>
      <Navigator />    
    </NavigationContainer>
  );
};

export default App;