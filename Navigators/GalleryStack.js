import React from "react";
import { View, Text, processColor } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//screens
import Nasa from "../Screens/Nasa";
import NasaFunction from "../Screens/NasaFunction";

//top navigator
const Tab = createMaterialTopTabNavigator();

const GalleryStack = () => {
  return (
    <Tab.Navigator
      //props
      //swipeEnabled={false}
      tabBarOptions={{
        style: { backgroundColor: "black" },
        activeTintColor: '#d4dc36',
        pressColor: 'red'
       
      }}
    >
      <Tab.Screen 
        name="NasaAPI" 
        component={Nasa} 
        options= {{
            tabBarLabel: "Nasa Api",
        }}
      />
      <Tab.Screen name="Nasa Function" component={NasaFunction} />
    </Tab.Navigator>
  );
};

export default GalleryStack;
