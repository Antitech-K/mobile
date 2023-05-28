import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function HomeParent({ navigation }) {
  
  //очистка памяти, временная функция
  const clearAll = async () => {
    await AsyncStorage.clear();
    console.log("чисто")
  }
  
  
  return (
    <View style={styles.container}>
      <Text>HomeParent</Text>  
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
})