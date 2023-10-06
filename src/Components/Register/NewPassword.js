import React, { useState, useEffect } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../IntroScreen/Header';

const NewPassword = () => {
  const [screenAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        Animated.timing(screenAnimation, {
          toValue: -hp('20%'), // Adjust this value as needed
          duration: 250,
          useNativeDriver: false,
        }).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        Animated.timing(screenAnimation, {
          toValue: 0,
          duration: 250,
          useNativeDriver: false,
        }).start();
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <Animated.View style={[styles.container, { marginTop: screenAnimation }]}>
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
        <Text style={styles.title}>{'\n'}Create New Password</Text>
        <Text style={styles.description}>
          New password must be different from {'\n'} previosly used password
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor="#a0a0a0"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#a0a0a0"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle login logic here
            console.log('clicked');
          }}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
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
    width: '100%',
    marginBottom: hp('2%'),
    backgroundColor: 'white',
    elevation: 5,
    height: hp('6%'),
    paddingHorizontal: wp('2%'),
  },
  input: {
    flex: 1,
    fontSize: hp('2%'),
  },
  button: {
    width: wp('87%'),
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
});

export default NewPassword;
