import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Animated } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Registration from './Registration';

const Login = ({isSigupClicked, setIsSigupClicked}) => {

  console.log('value::>>', isSigupClicked)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showLogin, setShowLogin] = useState(true); // Initially show the login component
  const [showRegistration, setShowRegistration] = useState(false);
  
  
  const screenAnimation = new Animated.Value(hp('100%'));
  const navigation = useNavigation();
  const passwordInputRef = useRef(null);

  const isValidEmailFormat = (email) => {
    // Basic email format check, you can enhance it as needed
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const animateScreenIn = () => {
    Animated.timing(screenAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  React.useEffect(() => {
    animateScreenIn();
  }, []);

  const handleSignUpClick = () => {
    // Clear login data and show the registration component
    setIsSigupClicked(true)
    setEmail('');
    setPassword('');
    setShowLogin(false);
    setShowRegistration(true);
  
  };

  return (
    <Animated.View style={[styles.container, { marginTop: screenAnimation }]}>
      
      {showLogin && (
        <View><Text style={styles.title}>Welcome</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                styles.shadow,
                { borderColor: email && !isValidEmail ? 'red' : '#A14142' },
              ]}
              placeholder="info@testemail.com"
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
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.shadow]}
              placeholder="Enter your Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.eyeButton} onPress={togglePasswordVisibility}>
              {showPassword ? (
                <Icon name="eye" size={wp('5%')} color="#A14142" style={styles.icon} />
              ) : (
                <Icon name="eye-slash" size={wp('5%')} color="#A14142" style={styles.icon} />
              )}
            </TouchableOpacity>
          </View>
          {!isValidEmail && email.length > 0 && (
            <Text style={styles.emailError}>Please enter a valid email address</Text>
          )}
          <Text
            style={styles.forgotPassword}
            onPress={() => {
              navigation.navigate('Forget');
            }}
          >
            Forget your Password?
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => { /* Handle login logic here */ }}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <Text style={{alignSelf:'center'}}>
            {' \n'}Don't have an account? {''}
            <Text
              style={{ fontWeight: 'bold' }}
              onPress={handleSignUpClick}
            >
              Sign up
            </Text>
          </Text>
        </View>
      )}
      {showRegistration && (
        
        <View>
         <Registration/>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: hp('3%'),
    marginBottom: hp('2%'),
    fontWeight: 'bold',
    alignSelf:'center'
  },
  shadow: {
    elevation: 10,
    shadowOpacity: 0.5,
    shadowOffset: { width: wp('0.5%'), height: hp('1%') },
    shadowRadius: wp('1%'),
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  passwordToggle: {
    position: 'absolute',
    right: 10,
    transform: [{ translateY: -10 }],
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
  emailError: {
    color: 'red',
    marginBottom: hp('2%'),
  },
  forgotPassword: {
    marginBottom: hp('2%'),
    alignSelf:'center'
  },
  button: {
    width: wp('70%'),
    backgroundColor: '#A14142',
    elevation: 8,
    borderRadius: 20,
    padding: 10,
    alignSelf:"center"
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUp: {
    marginTop: hp('2%'),
  },
});

export default Login;
