import React from "react";
import { StyleSheet, Text, View, Pressable, TextInput, Alert } from "react-native";


export default function ParentConnectsToChild({ navigation }) {
   
  const [codeValid, setCodeValid] = React.useState(false);
  const alertFunction = () => {
    Alert.alert('Ошибка!', 'Код должен состоять только из цифр.', [
      {text: 'ОК'}
      ]);
      setCodeValid(false);
  }

  const onPressFunctioin = () =>{
    if (false == !codeValid){
      return ( navigation.navigate("Instruction"))
    }
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
    else if (value.length !== 4) {
      setCodeValid(false);
    }
    else {
      if (value.length === 4){
        setCodeValid(!codeValid, console.log(!codeValid))
      }
    };
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Введите код, который отобразиться в дочернем приложении.
      </Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(val) => valueValidation(val)}
          placeholder="X X X X"
          keyboardType="decimal-pad"
          autoComplete = "off"
          maxLength = {4}
          caretHidden = {true}
          textAlign = "center"
        />
      </View>
      <Pressable  
          key = {false}
          style={[false == codeValid ? styles.unButton : styles.Button]}
          onPress={onPressFunctioin}
          >
          <Text 
          key = {false}
          style={[false == codeValid ? styles.unButtonText : styles.ButtonText]}
          >Продолжить</Text>
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
      fontSize: 24,
      marginTop : 20,
    },
    text: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 18,
        textAlign: "justify",
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
