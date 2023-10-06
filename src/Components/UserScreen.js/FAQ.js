import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image,TouchableWithoutFeedback } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../IntroScreen/Header';
import ListAccordion from './ListAccordion';
import Footer from '../IntroScreen/Footer';

const FAQ = ({navigation}) => {
  const handleCameraPress = () => {
    console.log("Press");
  navigation.navigate('RoofDesign')
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Images/UserData/House.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.overlay}>
          <Header />
          <Text style={styles.text}>FAQ's</Text>
        </View>
      </ImageBackground>
      <View style={styles.logoContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('../../Images/logo.png')}
        />
      </View>
      <ListAccordion />
     <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: wp('100%'),
    height: hp('43%'),
  },
  overlay: {
    flex: 1,
  },
  text: {
    fontSize: hp('2%'),
    color: 'black',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: hp('6%'),
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: wp('27%'),
    height: wp('25%'),
    marginTop: hp('-5.5%'),
  }, 

});

export default FAQ;
