import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeParent from "./parent/HomeParent";
import NewUserAgreement from "./NewUserAgreement";
import PhoneRegistration from "./PhoneRegistration";
import PhoneVerification from "./PhoneVerification";
import Instruction from "./Instruction";
import ChoiseScreen from "./ChoiseScreen";
import ParentFindToChild from "./ParentFindToChild";
import ParentConnectsToChild from "./ParentConnectsToChild";
import IsLoadingChild from "./child/IsLoadingChild";
import LocationChild from "./child/LocationChild";


const Stack = createNativeStackNavigator();

export default Navigator =() => {
  return ( 
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen  
            name="NewUserAgreement"
            component={NewUserAgreement}
        />
        <Stack.Screen  
            name="PhoneRegistration"
            component={PhoneRegistration}
        />
        <Stack.Screen  
            name="PhoneVerification"
            component={PhoneVerification}
        />
        <Stack.Screen 
            name="Instruction"
            component={Instruction}
        />
        <Stack.Screen 
            name="ChoiseScreen"
            component={ChoiseScreen}
        />
        <Stack.Screen 
            name="ParentFindToChild"
            component={ParentFindToChild}
        />
        <Stack.Screen 
            name="ParentConnectsToChild"
            component={ParentConnectsToChild}
        />
        <Stack.Screen
            name="HomeParent"
            component={HomeParent}
        />
        <Stack.Screen
            name="IsLoadingChild"
            component={IsLoadingChild}
        />
        <Stack.Screen
            name="LocationChild"
            component={LocationChild}
        />
    </Stack.Navigator>
     
  )
};