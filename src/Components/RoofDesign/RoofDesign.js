import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity ,animatedHeader,Animated, Easing } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../IntroScreen/Header';
import Circle from './Circle';
import ChooseTexture from './ChooseTexture'; 
const RoofDesign = () => {
  const [showTexture, setShowTexture] = useState(false); 
  const [animatedImageContainer] = useState(new Animated.Value(0));
  const [animatedLogo] = useState(new Animated.Value(0));
  const [animatedHeader] = useState(new Animated.Value(0));
  // const navigation = useNavigation(); // Initialize navigation

  const handleContinue = () => {

    setShowTexture(true);
    Animated.timing(animatedImageContainer, {
      toValue: -hp('17%'),
      duration: 500,
      useNativeDriver: false,
      easing: Easing.ease, 
    }).start();
    // Animate the tiny logo to go up
    Animated.timing(animatedLogo, {
      toValue: -hp('17%'),
      duration: 500,
      useNativeDriver: false,
      easing: Easing.ease, 
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
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
    
      {showTexture ? (
        <ChooseTexture />
      ) : (
        <>
          <Circle style={{ flex: 1 }} />
          <TouchableOpacity
            style={styles.button}
            onPress={handleContinue}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  image: {
    width: wp('105%'),
    height: hp('65%'),
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
  button: {
    width: wp('83%'),
    backgroundColor: '#A14142',
    elevation: 8,
    borderRadius: 20,
    padding: 10,
    alignSelf: 'center',
    position: 'absolute',
    bottom: hp('4%'), 
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RoofDesign;
