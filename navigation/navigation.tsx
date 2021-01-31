import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CountryDetails from '../screens/countryDetails';
import home from '../screens/home';
import WeatherDetails from '../screens/weatherDetails';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component = {home}
        />
        <Stack.Screen
          name="CountryDetails"
          component = {CountryDetails}
        />
        <Stack.Screen
          name="WeatherDetails"
          component = {WeatherDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;