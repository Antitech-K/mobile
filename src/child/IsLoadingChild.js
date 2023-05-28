import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function IsLoadingChild({ navigation }) {
  
  //очистка памяти, временная функция
  const clearAll = async () => {
    await AsyncStorage.clear();
    console.log("чисто")
  }

  setTimeout(() => {navigation.navigate("LocationChild")}, 5000);

  return (
    <View style={styles.container}>
      <Text>Ожидайте, сейчас вылетит птичка.</Text> 
      <Image source={require("../pictures/VAyR.gif")}
              style={styles.Pic}
      >
      </Image> 
      <Button
              onPress={()=> clearAll()}
              title="сброс памяти"
              color="#841584"
              />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Pic: {
    width: 100,
    height: 100
  }
})