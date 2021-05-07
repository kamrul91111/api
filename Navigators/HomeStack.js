import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Home from '../Screens/Home'
import Gallery from '../Screens/Gallery'

//stack navigator
const Stack = createStackNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator
        headerMode='screen'
        mode='modal' //slide animation for ios
        screenOptions={{
            headerTitleAlign: "center",
        }}
    >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options= {{
            title: '',
            headerStyle: {
                backgroundColor: '#060608',
            },
            headerTintColor: 'white'
        }}    
      />
      <Stack.Screen 
        name="Gallery" 
        //screen that contains the stack
        component={Gallery} 
        options= {{
            title: 'Gallery',
            headerStyle: {
                backgroundColor: '#060608',
            },
            headerTintColor: '#fff',
        }}       
    />
    </Stack.Navigator>
  );
};

export default HomeStack;
