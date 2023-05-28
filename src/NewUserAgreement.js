import React, {useState} from "react";
import { StyleSheet, Text, Dimensions, View, Pressable } from "react-native";
import CheckBox from "react-native-check-box";
import Pdf from "react-native-pdf";
import AsyncStorage from '@react-native-async-storage/async-storage';



const sourcePdf = {
    uri: "https://samples.leanpub.com/thereactnativebook-sample.pdf",
    cache: true,
  };


export default function NewUserAgreement({ navigation }) {

  const typeStorage = async () =>{
    const typeToken = await AsyncStorage.getItem('@type')
    console.log (typeToken, "token");
    if (typeToken == "parent") {
      return navigation.navigate("HomeParent")
    }
    else if (typeToken == "child") {
      return navigation.navigate("IsLoadingChild")
    }
  }
  typeStorage();

  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedCheckBox, setIsCheckedCheckBox] = useState(0)

  const clickCheckbox = () => {
    setIsChecked(!isChecked)
    setIsCheckedCheckBox(!isCheckedCheckBox)
    console.log(!isChecked)
    console.log(!isCheckedCheckBox)
  }

  const onPressFunctioin = (isChecked) =>{
    if (1 == isCheckedCheckBox){
      return ( navigation.navigate("PhoneRegistration"))
    }
  };

  return (
    <View style={styles.container}>
      <Pdf
        source={sourcePdf}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
          
        } }
        onPageChanged={(page, numberOfPages) => {
        //  console.log(`Current page: ${page}`); //отображает просматриваемую страницу в консоли
        
        } }
        onError={(error) => {
          console.log(error);
          alert("Ошибка подключения к серверу. Попробуйте подключиться позднее или обновите приложение");
        
        } }
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        } }
        minScale={0.5}
        maxScale={5.0}
        style={styles.pdfStyle} />
      <CheckBox isChecked={isChecked} onClick={clickCheckbox}
        style={styles.checkboxStyle} rightText="Я принимаю условия пользовательского соглашения." 
        rightTextStyle={{fontSize: 20, color: "black"}} 
        checkedCheckBoxColor="#841584"
        uncheckedCheckBoxColor="grey"
      />
      
        <Pressable  
          key = {0}
          style={[0 == isCheckedCheckBox ? styles.uncheckedButton : styles.checkedButton]}
          onPress={onPressFunctioin}
          >
          <Text 
          key = {0}
          style={[0 == isCheckedCheckBox ? styles.uncheckedButtonText : styles.checkedButtonText]}
          >Продолжить</Text>
        </Pressable>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pdfStyle: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height,
    flex: 8,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: 5,
    marginBottom: 10
    },
  checkboxStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
    left: 30
  }, 
  checkedButton:{
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: "black",
    margin: 10,
    marginBottom: 50,
    borderRadius: 5
  },
  checkedButtonText:{
    color: "white",
    fontSize: 28,
    //fontWeight: 'bold'
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
    borderRadius: 5
  },
  uncheckedButtonText:{
    color: "grey",
    fontSize: 28,
  }
})