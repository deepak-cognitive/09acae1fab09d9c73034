import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const WeatherDetails = () => {

  const weather = useSelector((state: any) => state.weather);
  return (<>
    <ScrollView>
      <View>
        <Text>Temperature: {weather.temperature}</Text>
      </View>
      <View>
        <Text>Wind_speed: {weather.wind_speed}</Text>
      </View>
      <View>
        <Text>Precip: {weather.precip}</Text>
      </View>
      <View>
        <Image source={{
          height: 50,
          width: 100,
          uri: `${weather.weather_icons}`
        }} />
      </View>
    </ScrollView>
  </>)
}

export default WeatherDetails;