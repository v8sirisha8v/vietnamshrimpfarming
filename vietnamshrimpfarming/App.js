import React from "react"; // Importing React
import { NavigationContainer } from '@react-navigation/native'; // Importing NavigationContainer from react-navigation/native
import { createStackNavigator } from '@react-navigation/stack'; // Importing createStackNavigator from react-navigation/stack
import WelcomeScreen from "./WelcomeScreen"; // Importing WelcomeScreen component from WelcomeScreen.js
import LoginScreen2 from "./LoginScreen2"; // Importing LoginScreen component from LoginScreen.js
import DashboardScreen from "./Dashboard";
import Verification from "./Verification";
import RegisterPond from "./RegisterPond";

import {FIREBASE_APP} from './FirebaseConfig';
import { registerRootComponent } from 'expo';

const Stack = createStackNavigator(); // Creating a stack navigator

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Welcome"> 
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen2} options={{ headerShown: false }}/> 
        <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }}/> 
        <Stack.Screen name="RegisterPond" component={RegisterPond} options={{ headerShown: false }}/> 
      </Stack.Navigator>
    </NavigationContainer> 
  );
}
