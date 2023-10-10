import React, { useState, Fragment } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,  Animated,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../IntroScreen/Header';
import Login from './Login';
import Registration from './Registration';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

const IntroRejister = ({ navigation }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  // const imageHeight = showRegistration ? hp('51%')  : hp('55%');
  const [animatedImageContainer] = useState(new Animated.Value(0));
  const [animatedLogo] = useState(new Animated.Value(0));
  const [animatedHeader] = useState(new Animated.Value(0));
  const [isSigupClicked, setIsSigupClicked] = useState(false)
  const [isregistrationclicked,setIsregistrationClicked]=useState(false)
  


  console.log('is clicked::>>L', isregistrationclicked)
  // console.log('is clicked::>>', isSigupClicked)
  
  useEffect(() => {
    const backAction = () => {
      // Show an exit confirmation dialog
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit?',
        [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'Exit',
            onPress: () => BackHandler.exitApp(),
          },
        ],
        { cancelable: false }
      );
  
 
      return true;
    };
  
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
  

    return () => {
      backHandler.remove();
    };
  }, []);

  const handleLoginPress = () => {
  
    setShowLogin(true);
    setShowRegistration(false);
    // Reset the animation values when switching to login
    Animated.timing(animatedImageContainer, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedLogo, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedHeader, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleRegistrationPress = () => {
    setShowLogin(false);
    setShowRegistration(true);

    // Animate the image container to go down
    Animated.timing(animatedImageContainer, {
      toValue: -hp('10%'),
      duration: 500,
      useNativeDriver: false,
    }).start();
    // Animate the tiny logo to go up
    Animated.timing(animatedLogo, {
      toValue: -hp('10.5%'),
      duration: 500,
      useNativeDriver: false,
    }).start();
    // Animate the header to go down by 8%
 
  };

  // console.log('showRegistratrion::>', showRegistration)

  useEffect(()=>{
    if(isSigupClicked){
      handleRegistrationPress()
    }
  },[isSigupClicked]
  )
  useEffect(()=>{
    if(isregistrationclicked){
      handleLoginPress()
    }
  },[isregistrationclicked])

  return (
    <ScrollView 
      style={styles.container}
      keyboardShouldPersistTaps="handled" 
    ><View style={styles.overlay}>
            <Header style={{ top: animatedHeader }} />
          </View>
      <Animated.View
        style={[
          styles.imageContainer,
          {
            top: animatedImageContainer,
          },
        ]}
      >
        <ImageBackground
          source={require('../../Images/Register.png')}
          resizeMode="cover"
          style={[styles.image, ]}
        >
          
        </ImageBackground>
      </Animated.View>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            marginTop: animatedLogo,
          },
        ]}
      >
        <Image
          style={styles.tinyLogo}
          source={require('../../Images/logo.png')}
        />
      </Animated.View>
      {showLogin && <Login isSigupClicked={isSigupClicked} setIsSigupClicked={setIsSigupClicked} />}
      {showRegistration && <Registration isregistrationclicked={isregistrationclicked} setIsregistrationClicked={setIsregistrationClicked}/>}
      {!showLogin && !showRegistration && (
        <Fragment>
          <View style={styles.textContainer}>
            <Text style={styles.baseText}>
              The Roof Hides a {'\n'}
              World of Possibilities
            </Text>
            <Text>Ready to Begin? Login or Join Us{'\n\n'}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  width: wp('70%'),
                  backgroundColor: '#A14142',
                  elevation: 10,
                  shadowColor: '#A14142',
                  shadowOpacity: 0.5,
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 2,
                },
              ]}
              onPress={handleLoginPress}
            >
              <Text
                style={[
                  styles.buttonText,
                  { color: 'white', fontWeight: 'bold' },
                ]}
              >
                Log In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  width: wp('70%'),
                  borderColor: 'black',
                  borderWidth: 1,
                  backgroundColor: 'white',
                  marginTop: hp('6%'),
                },
              ]}
              onPress={handleRegistrationPress}
            >
              <Text
                style={[
                  styles.buttonText,
                  { color: 'black', fontWeight: 'bold' },
                ]}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </Fragment>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  image: {
    width: wp('105%'),
    height: hp('55%'),
    alignSelf:'center'
  },
  overlay: {
    // flex: 1,
    position:'absolute',
    zIndex:1,
    width:'100%'
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#A14142',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  tinyLogo: {
    width: wp('29%'),
    height: wp('27%'),
    marginTop: hp('-7.5%'),
    shadowColor:'A14142'
  },
  textContainer: {
    marginTop: '5%',
    alignItems: 'center',
  },
  baseText: {
    fontSize: hp('3.7%'),
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  button: {
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: hp('2.5%'),
  },
});

export default IntroRejister;
