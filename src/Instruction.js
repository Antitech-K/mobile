import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";


const windowWidth = Dimensions.get('window').width;

export default function Instruction({ navigation }) {
   
    return (
      <>
        <View style={styles.container}>
            <Text style={styles.header}>ИНСТРУКЦИЯ</Text>
            <Text style={styles.text}>
              Следующим шагом вам необходимо выбрать тип данного приложения,
              и установить связь между дочерним и родительским приложением.
              Если вы установили приложение впервые, то сначала надо зарегистривать дочернее приложение.
            </Text>
            <Text style={styles.border}>
              Внимание! {"\n"} После выбора типа приложения, его нельзя будет отметить!
            </Text>
          </View>
          <View style={{flexDirection: 'row', margin : 20,}}>
            <Image source={require("./pictures/glass.png")}
              style={styles.Pic}
            >
            </Image>
            <Text style={styles.textPic}>Дочернее - этот тип приложения будет отправлять
            координаты местонахождения телефона на подключенное родительское приложение.
            </Text>
        </View>
        <View style={{flexDirection: 'row', margin : 20}}>
          <Image source={require("./pictures/mapIcon.png")}
              style={styles.Pic}
            >
            </Image>
            <Text style={styles.textPic}>Родительское - этот тип приложения будет получать
            координаты местонахождения подключенного дочернего телефона.
            </Text>
        </View>
        <TouchableOpacity  
          style={styles.Button}
          onPress={()=> navigation.navigate("ChoiseScreen")}
          >
          <Text
          style={styles.ButtonText}
          >Продолжить</Text>
        </TouchableOpacity>
      </>
)};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
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
    border: {
        //flex: 0.2,
        backgroundColor: "grey",
        fontSize: 20,
        textAlign: "center",
        borderWidth: 5,
        borderRadius: 20,
        borderColor: "black", 
    },
    Pic:{
      width: 150,
      height: 150,
      borderRadius: 20,
      flexDirection: "row",
      
    },
    textPic:{
      width: windowWidth -180,
      flexDirection: "row",
      fontSize: 16,
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
      margin: 10,
      marginBottom: 50,
      borderRadius: 10
    },
    ButtonText:{
      color: "white",
      fontSize: 28,
    },
    uncheckedButton:{
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 50,
      backgroundColor: "#bbb",
      margin: 10,
      marginBottom: 50,
      borderRadius: 10
    },
    uncheckedButtonText:{
      color: "grey",
      fontSize: 28,
    },
    })
