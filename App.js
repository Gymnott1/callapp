//https://reactnavigation.org/docs/bottom-tab-navigator
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logscreen from "./components/calllogs";
import ContactScreen from "./components/contacts";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const bTab = createBottomTabNavigator();
const App = () => {


  return(
    <NavigationContainer>
      <bTab.Navigator>
        <bTab.Screen name="Home" options={{title: 'Contacts'}} component={ContactScreen}/>
        <bTab.Screen name="Call" component={Logscreen} options={{title: 'CallLogs'}}/>
        
      </bTab.Navigator>
    </NavigationContainer>
    
  )
}

export default App;
