// IntroScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header'; 
import Slider from './Slider';

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <Header navigation={navigation} />

     
    <Slider navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default IntroScreen;
