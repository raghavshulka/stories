import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation';
import { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";

const Stack = createStackNavigator<RootStackParamList>();

export default function Route() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}
