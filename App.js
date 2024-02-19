//https://reactnavigation.org/docs/bottom-tab-navigator
import React from "react";
import { Image } from "react-native";
import ContactScreen from "./components/contacts";
import Settings from "./components/Settings";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Stack = createNativeStackNavigator();
const bTab = createBottomTabNavigator();
const App = () => {
  const SettingsIcon = () => <Image source={require('./assets/settings.png')} style={{
    
    width: 30,
    height: 30
  }} />
  const ProfileIcon = () => <Image source={require('./assets/contacts.png')} style={{
    width: 30,
    height: 30,
    objectFit: "cover",
  }}/>



  return(
    <NavigationContainer>
      <bTab.Navigator>
        <bTab.Screen name="Home" options={{title: 'Contacts', tabBarIcon: ProfileIcon}} component={ContactScreen}/>
        <bTab.Screen name="Settings" component={Settings} options={{title: 'Settings', tabBarIcon: SettingsIcon}}/>
        
      </bTab.Navigator>
    </NavigationContainer>
    
  )
}

export default App;
