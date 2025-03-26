import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import RentScreen from "./screens/RentScreen";
import CatalogScreen from "./screens/CatalogScreen";
import AdminScreen from "./screens/AdminScreen";
import AuthScreen from "./screens/AuthScreen";
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Text } from "react-native";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Alquiler" component={RentScreen} />
      <Tab.Screen name="Catálogo" component={CatalogScreen} />
      <Tab.Screen name="Administración" component={AdminScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Welcome">
    //     <Stack.Screen name="Welcome" component={WelcomeScreen} />
    //     <Stack.Screen name="Main" component={MainTabs} />
    //     <Stack.Screen name="Auth" component={AuthScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  <Text>Hola</Text>
  );
}
