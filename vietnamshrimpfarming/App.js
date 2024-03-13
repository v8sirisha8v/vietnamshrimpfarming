import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import SignUp from "./SignUp";
import { DashboardScreen, WaterParameterScreen } from "./DashboardScreen"; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard',  headerShown: false }} />
        {/* Add screens for each water parameter */}
        <Stack.Screen name="pH" component={WaterParameterScreen} options={({ route }) => ({ title: route.params.title })} />
        <Stack.Screen name="Salinity" component={WaterParameterScreen} options={({ route }) => ({ title: route.params.title })} />
        <Stack.Screen name="Temperature" component={WaterParameterScreen} options={({ route }) => ({ title: route.params.title })} />
        <Stack.Screen name="OxygenLevels" component={WaterParameterScreen} options={({ route }) => ({ title: route.params.title })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
