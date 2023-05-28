import React from "react";
import { StyleSheet, Text, View, Pressable, TextInput, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

let valueGlobal;

export default function ParentFindToChild({ navigation }) {

  const [phoneValid, setPhoneValid] = React.useState(0);

  const alertFunction = () => {
    Alert.alert('Ошибка!', 'Номер телефона должен состоять только из цифр.', [
      {text: 'ОК'}
      ]);
      setPhoneValid(0);
  }

  const valueValidation = (value) =>{
    if (isNaN(value) == true ){
      alertFunction()
      }
    else if (value.indexOf('.') !== -1){
      alertFunction()
    }
    else if (value.indexOf(' ') !== -1){
      alertFunction()
    }
    else if (value.length !== 10) {
      setPhoneValid(0);
    }
    else {
      if (value.length === 10){
        setPhoneValid(!phoneValid)
        valueGlobal = value;
        console.log(valueGlobal)
      }
    };
  }

  const storeDataParent = async () => { 
    try {
      console.log(valueGlobal, 'номер телефона дочерки')
      await AsyncStorage.setItem('@tel_child_1', valueGlobal);
    } catch (e) {
      console.log("saving error")
      // saving error
    }
    navigation.navigate("ParentConnectsToChild")
  }


  const onPressFunctioin = () =>{
    if (0 == !phoneValid){
      //console.log(val, "фу-я онПресс")
      return (storeDataParent())
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Введите номер телефона дочернего телефона для создания подключения.
      </Text>
      <View style= {{flexDirection: "row"}}>
        <Text style={styles.textInput}>
          +7
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => valueValidation(val)}
          placeholder="(999) 999 99 99"
          keyboardType="decimal-pad"
          autoComplete = "tel"
          maxLength = {10}
          caretHidden = {true}
          autoCorrect = {false}
          textAlign = "center"
        />
      </View>
      <Pressable  
        key = {0}
        style={[0 == phoneValid ? styles.unButton : styles.Button]}
        onPress={onPressFunctioin}
        >
        <Text
          key = {0}
          style={[0 == phoneValid ? styles.unButtonText : styles.ButtonText]}
          >Продолжить
        </Text>
      </Pressable> 
    </View>
    
)};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      //flexDirection: "column",
      justifyContent: "center",
      alignItems: 'center',
    },
    header: {
      fontSize: 20,
      marginTop : 20,
    },
    input: {
      height: 60,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      fontSize: 28,
    },
    textInput:{
      fontSize: 28,
      textAlign: "center",
      justifyContent: 'space-around',
      alignSelf: "center",
    },

    Button:{
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 50,
      backgroundColor: "black",
      margin: 30,
      marginBottom: 50,
      borderRadius: 5
    },
    ButtonText:{
      color: "white",
      fontSize: 28,
    },
    unButton:{
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 50,
      backgroundColor: "#bbb",
      margin: 30,
      marginBottom: 50,
      borderRadius: 5
    },
    unButtonText:{
      color: "grey",
      fontSize: 28,
    },
    })