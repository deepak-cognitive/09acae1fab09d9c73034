import React, { useState } from 'react';
import { Button, ScrollView, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import showCountryDetails from '../redux/action';
import styles from '../styles/styles';

type Props = {
  showCountryDetails: Function 
  navigation: {
    navigate:Function 
  }
}
const Home = ({showCountryDetails, navigation}: Props) => {
  const [country, setCountry] = useState('');

  const getCountryDetails = () => {
    showCountryDetails(country);
    navigation.navigate('CountryDetails');
  }
  return (<>
    <ScrollView>
      <View>
        <TextInput onChangeText={(e)=> setCountry(e)} style={styles.inputBox} />
      </View>
      <View>
        <Button onPress={getCountryDetails} title = "Submit" />
      </View>
    </ScrollView>
  
  </>)
}

export default connect(null, { showCountryDetails })(Home);