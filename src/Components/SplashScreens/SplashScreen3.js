import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SplashScreen3 = ({ navigation }) => {
  const [circleAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(circleAnimation, {
      toValue: 1,
      duration: 700, 
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  setTimeout(() => {
    navigation.navigate('SplashScreen4');
  }, 700);

  const circleSizeInterpolation = circleAnimation.interpolate({
    inputRange: [0, 0.01, 1],
    outputRange: [0, wp('20%'), 0], 
  });

  // Center the circle both horizontally and vertically
  const circlePositionInterpolationX = circleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [wp('0%'), 0], 
  });

  const circlePositionInterpolationY = circleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [hp('0%'), 0], 
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [
              { scale: circleSizeInterpolation },
              { translateX: circlePositionInterpolationX },
              { translateY: circlePositionInterpolationY },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: '#a34243',
    width: wp('10%'), // Responsive circle width
    height: wp('10%'), // Responsive circle height
    borderRadius: wp('10%') / 2, // Responsive circle border radius
  },
});

export default SplashScreen3;
