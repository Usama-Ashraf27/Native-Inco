import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';

const Registration = ({isregistrationclicked,setIsregistrationClicked}) => {
  console.log('value::>>R', isregistrationclicked)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(true);
  const screenAnimation = new Animated.Value(1); 
  const navigation = useNavigation();

  const handleRegistration = () => {
    // Your registration logic here
    console.log('Registration successful');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isValidEmailFormat = (email) => {
    // Basic email format check, you can enhance it as needed
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  };

  useEffect(() => {
    // Slide up animation for the screen
    Animated.timing(screenAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);
  const handleSignInClick = () => {
    // Reset the Registration form and show the Login form
    setIsregistrationClicked(true);
    setName('');
    setEmail('');
    setMobile('');
    setPassword('');
    setShowLogin(true);
    setShowRegistration(false);
  };

  return (
    <Animated.View style={[
      styles.container,
      {
        transform: [
          {
            translateY: screenAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 300], 
            }),
          },
        ],
      },
    ]}>
      {showRegistration && (
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: hp('4%'),
    alignSelf:'center' }}>Sign Up</Text>
      {/* Name Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            styles.shadow,
          ]}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            styles.shadow,
          ]}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setIsValidEmail(isValidEmailFormat(text));
          }}
        />
       {email.length > 0 && isValidEmail ? (
          <Icon name="check-circle" size={wp('5%')} color="green" style={styles.icon} />
        ) : null}
      </View>

      {/* Mobile Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.shadow]}
          placeholder="Enter Your Mobile Number"
          value={mobile}
          onChangeText={setMobile}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.shadow]}
          placeholder="Enter your Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={togglePasswordVisibility}
        >
          {showPassword ? (
            <Icon name="eye" size={wp('5%')} color="#A14142" style={styles.icon} />
          ) : (
            <Icon name="eye-slash" size={wp('5%')} color="#A14142" style={styles.icon} />
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
            style={styles.button}
            onPress={handleRegistration}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.signInText}>
            Already have an account?{' '}
            <Text
              style={{ fontWeight: 'bold' }}
              onPress={handleSignInClick}
            >
              Sign in
            </Text>
          </Text>
        </View>
         )}

         {showLogin && (
         <Login/>
         )}
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: wp('80%'),
    marginBottom: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: hp('6%'),
    paddingLeft: wp('4%'),
    backgroundColor: 'white',
    
  },
  shadow: {
    elevation: 10,
    shadowOpacity: 0.5,
    shadowOffset: { width: wp('0.5%'), height: hp('1%') },
    shadowRadius: wp('1%'),
  },
  icon: {
    position: 'absolute',
    right: wp('2%'),
    top: hp('2%'),
  },
  eyeButton: {
    position: 'absolute',
    right: wp('1%'),
    top: hp('-0.5%'),
  },
  button: {
    width: wp('80%'),
    height: hp('6%'),
    backgroundColor: '#A14142',
    elevation: 8,
    borderRadius: wp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
  signInText: {
    marginTop: hp('2%'),
    alignSelf:'center'
  },
});

export default Registration;
