import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { showCapitalWeather } from '../redux/action';

type Props = {
  showCapitalWeather: Function 
  navigation: {
    navigate:Function 
  }
}
const CountryDetails = ({ showCapitalWeather, navigation }: Props) => {
  
  const country = useSelector((state: any) => state.country);
  const getCapitalWeather = () => {
    showCapitalWeather(country.capital);
    navigation.navigate("WeatherDetails");
  }
  
  return (<>
    <View>
      <Text>Capital : {country.capital }</Text>
    </View>
    <View>
      <Text>Population : {country.population }</Text>
    </View>
    <View>
      <Text>Latlng : {country.latlng }</Text>
    </View>
    <View>
      <Image source={{
        height: 50,
        width: 100,
        uri: country.flag
      }} />
    </View>
    <View>
      <Button title="Capital Weather" onPress={getCapitalWeather} />
    </View>
  </>)
}

export default connect(null, {showCapitalWeather})(CountryDetails);