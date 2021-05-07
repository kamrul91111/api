import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//icons
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//screens
import FunctionalComponent from '../Screens/FunctionalComponent'
import ClassComponent from "../Screens/ClassComponent";


//stack navigators
import HomeStack from './HomeStack'

const Tab = createMaterialBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        shifting={true}
        barStyle={{backgroundColor: 'black'}}
      >
        <Tab.Screen 
          name="Functional" 
          component={FunctionalComponent} 
          options={{
            tabBarLabel: "Functional",
            tabBarIcon: () => (
              <MaterialIcons name="looks-6" size={24} color="#719C70" />
            ),
          }}    
        />
        <Tab.Screen 
          name="Home" 
          component={HomeStack} 
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => (
              <MaterialIcons name="home" size={24} color="#719C70" />
            ),
          }}  
        />
        <Tab.Screen 
          name="Class" 
          component={ClassComponent} 
          options={{
            tabBarLabel: "Class",
            tabBarIcon: () => (
            <MaterialCommunityIcons name="react" size={24} color="#719C70" />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
