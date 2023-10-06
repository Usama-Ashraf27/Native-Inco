import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SplashScreen4 = ({ navigation }) => {
  const translateY = useRef(new Animated.Value(-400)).current;
  const logoSize = useRef(new Animated.Value(150)).current;
  const imancoTextStyle = useRef(new Animated.Value(30)).current;
  const textstyle = useRef(new Animated.Value(10)).current;
  const bottomTextTranslateY = useRef(new Animated.Value(100)).current;
  const screenTranslateY = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    setTimeout(() => {
      // Reset the navigation stack to only have 'IntroScreen' in it
      navigation.reset({
        index: 0,
        routes: [{ name: 'Slider' }],
      });
    }, 1100);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Slider');
  //   }, 1200); 
  // }, []);

  useEffect(() => {
    
    setTimeout(() => {
      Animated.timing(screenTranslateY, {
        toValue: -400,
        duration: 1050,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }, 950); 

  
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: -100,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(logoSize, {
        toValue: 200,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(imancoTextStyle, {
        toValue: 30,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(textstyle, {
        toValue: 15,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(bottomTextTranslateY, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: screenTranslateY, // Apply translateY animation to the entire screen
            },
          ],
        },
      ]}
    >
      <Animated.Image
        source={require('../../../assets/logo.png')}
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateY,
              },
              {
                scale: logoSize.interpolate({
                  inputRange: [50, 200],
                  outputRange: [1, 2],
                }),
              },
            ],
          },
        ]}
      />
      <Animated.Text
        style={[
          styles.text,
          {
            fontSize: imancoTextStyle,
            marginTop: '12%',
            transform: [
              {
                translateY: translateY,
              },
            ],
          },
        ]}
      >
        IMANCO TRADING
      </Animated.Text>
      <Animated.Text
        style={[
          styles.text,
          {
            fontSize: textstyle,
            transform: [
              {
                translateY: translateY,
              },
            ],
          },
        ]}
      >
        ESTABLISHED SINCE 1976
      </Animated.Text>
      <Animated.Text
        style={[
          styles.bottomText,
          {
            transform: [
              {
                translateY: bottomTextTranslateY,
              },
            ],
          },
        ]}
      >
        ROOF SHAPE   •   TEXTURE   •   ROOF COLOR
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp('25%'), // Use wp to define a width percentage
    height: wp('23%'), // Use wp to define a height percentage
  },
  text: {
    fontSize: hp('3%'), // Use hp to define font size based on screen height
    marginTop: hp('2%'), // Use hp to define margin based on screen height
  },
  bottomText: {
    fontSize: hp('2%'), // Use hp to define font size based on screen height
    color: '#b66b6c',
    position: 'absolute',
    bottom: hp('2%'), // Use hp to define position based on screen height
  },
});


export default SplashScreen4;
