import React, { useState, useEffect } from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome5';

const Forget = ({navigation}) => {
  const [screenAnimation] = useState(new Animated.Value(0));
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); 


  const isValidEmailFormat = (email) => {
    // Basic email format check, you can enhance it as needed
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  };
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
        <Text style={styles.title}>{'\n'}Forgot Password?</Text>
        <Text style={styles.description}>
          Please enter your email address to receive a verification code
        </Text>
        <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            styles.shadow,
            { borderColor: email && !isValidEmail ? 'red' : '#A14142' },
          ]}
          placeholder="Entre You Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setIsValidEmail(isValidEmailFormat(text));
          }}
        />
      {email.length > 0 && isValidEmail ? (
  <Icon name="check-circle" size={20} color="green" style={styles.icon} />
) : null}
      </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('OTP')
          }}
        >
          <Text style={styles.buttonText}>Send Email</Text>
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

export default Forget;
