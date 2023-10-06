import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Animated,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../IntroScreen/Header';

const OTP = ({navigation}) => {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const focusNextInput = (index) => {
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Images/Register.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.overlay}>
          <Header />
        </View>
      </ImageBackground>
      <View style={styles.logoContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('../../Images/logo.png')}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.description}>
          Please enter 4-digit code sent to {'\n'}your email.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            ref={inputRefs[0]}
            style={[styles.input, styles.inputItem]}
            placeholder="1"
            placeholderTextColor="#a0a0a0"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => {
              if (text.length === 1) {
                focusNextInput(0);
              }
            }}
          />
          <TextInput
            ref={inputRefs[1]}
            style={[styles.input, styles.inputItem]}
            placeholder="2"
            placeholderTextColor="#a0a0a0"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => {
              if (text.length === 1) {
                focusNextInput(1);
              }
            }}
          />
          <TextInput
            ref={inputRefs[2]}
            style={[styles.input, styles.inputItem]}
            placeholder="3"
            placeholderTextColor="#a0a0a0"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => {
              if (text.length === 1) {
                focusNextInput(2);
              }
            }}
          />
          <TextInput
            ref={inputRefs[3]}
            style={[styles.input, styles.inputItem]}
            placeholder="4"
            placeholderTextColor="#a0a0a0"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => {
              if (text.length === 1) {
                // The last input, you can perform any action here
              }
            }}
          />
        </View>
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>
            If you don't receive the code?{' '}
            <Text style={{ color: 'red', fontWeight: 'bold' }}>Resend</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('NewPassword')
          }}
        >
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: wp('100%'),
    height: hp('54%'),
  },
  overlay: {
    flex: 1,
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  title: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  description: {
    fontSize: hp('2%'),
    textAlign: 'center',
    marginBottom: hp('4%'),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginBottom: hp('2%'),
  },
  input: {
    fontSize: hp('2%'),
    width: wp('15%'), 
    height: hp('6%'),
    borderColor: 'gray',
    backgroundColor: 'white', // White background color
    textAlign: 'center',

    elevation: 7,
    
    paddingHorizontal: wp('4%'),
    marginLeft: wp('1%'), 
  },
  inputItem: {
    flex: 1, // Allow inputs to expand within the container
    marginRight: wp('1%'), // Add margin to the right to create space
  },
  button: {
    width: wp('83%'),
    backgroundColor: '#A14142',
    elevation: 8,
    borderRadius: 20,
    padding: 10,
    marginTop: hp('2%'),
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resendContainer: {
    marginTop: hp('2%'),
  },
  resendText: {
    color: 'black', // Set the text color to black (default)
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OTP;
