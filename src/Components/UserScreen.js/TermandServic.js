import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../IntroScreen/Header';
import Footer from '../IntroScreen/Footer';

const TermandServic = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Images/UserData/House.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.overlay}>
          <Header />
          <Text style={styles.text}>Terms and Conditions</Text>
        </View>
      </ImageBackground>
      <View style={styles.logoContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('../../Images/logo.png')}
        />
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={{ fontSize: 16 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 

It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        
        </ScrollView>
      </View>
      <View>
      <Footer/>
      </View>
    </View>
  );
};

export default TermandServic;

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
    marginTop: hp('-6.5%'),
  },
  scrollViewContainer: {
    height: hp('40%'), 
    marginHorizontal: 20,
    marginVertical: 5,
    
  },
  scrollViewContent: {
    paddingVertical: hp('1.5') 
  }, 
   
  footerImage: {
    width: wp('100%'),
    height: hp('24%'), 
   
  },
});
