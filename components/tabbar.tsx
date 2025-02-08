import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/app/(root)/[home]';
import ModuleScreen from '@/app/(root)/[modules]';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Modules" component={ModuleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
