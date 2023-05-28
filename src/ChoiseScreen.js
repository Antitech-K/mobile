import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function СhoiseScreen({ navigation }) {
  
  //очистка памяти, временная функция
  const clearAll = async () => {
    await AsyncStorage.clear();
    console.log("чисто")
  }

  const storeDataChild = async (value) => { 
    try {
      await AsyncStorage.setItem('@type', value);
    } catch (e) {
      console.log("saving error")
      // saving error
    }
    return ( navigation.navigate("IsLoadingChild"))
  }


  const storeDataParent = async (value) => { 
    try {
      await AsyncStorage.setItem('@type', value);
    } catch (e) {
      console.log("saving error")
      // saving error
    }
    return ( navigation.navigate("ParentFindToChild"))
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@type')
      if(value !== null) {
        console.log(value)
        // value previously stored
      }
    } catch(e) {
      console.log("reasing error")
      // error reading value
    }
  }

  const childAlert = () =>
  Alert.alert('Подтверждение!', 'Вы уверены, что хотите выбрать дочернее приложение.', [
  {text: 'Нет'},
  {text: 'Да', onPress: () =>  storeDataChild("child")}
  ]);

  const parentsAlert = () =>
  Alert.alert('Подтверждение!', 'Вы уверены, что хотите выбрать родительское приложение.', [
  {text: 'Нет'},
  {text: 'Да', onPress: () => storeDataParent("parent")}
  ]);

    return (
      <>
        <View style={{ alignItems: "center"}}>
            <Text style={styles.header}>Выбирай, а то проиграешь</Text>
        </View>
        <View style={styles.container}>
          <View style={{flexDirection: 'column'}}>
            <TouchableOpacity onPress={childAlert}>
              <Image source={require("./pictures/glass.png")}
                style={styles.Pic}
              >
              </Image>
              <Text style={styles.textPic}>Дочернее.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'column'}}>
            <TouchableOpacity onPress={parentsAlert}>
              <Image source={require("./pictures/mapIcon.png")}
                style={styles.Pic}
              >
              </Image>
              <Text style={styles.textPic}>Родительское.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button
              onPress={clearAll}
              title="сброс памяти"
              color="#841584"
              />
        <TouchableOpacity  
          style={styles.Button}
          onPress={()=> navigation.navigate("Instruction")}
          >
          <Text
          style={styles.ButtonText}
          >Назад к инструкции</Text>
        </TouchableOpacity>
      </>
)};

const styles = StyleSheet.create({
    header: {
      fontSize: 24,
      marginTop : 20,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around', 
      alignItems: "center" 
    },
    Pic:{
      width: 150,
      height: 150,
      borderRadius: 20,
    },
    textPic:{
      fontSize: 20,
      textAlign: "center",
    },
    Button:{
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 50,
      backgroundColor: "#841584",
      margin: 10,
      marginBottom: 50,
      borderRadius: 10
    },
    ButtonText:{
      color: "white",
      fontSize: 20,
    },
})