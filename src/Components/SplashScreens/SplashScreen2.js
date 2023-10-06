import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SplashScreen2 = ({ navigation }) => {
  const [circleAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(circleAnimation, {
      toValue: 1,
      duration: 950, // almost 1 second
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  setTimeout(() => {
    navigation.navigate('SplashScreen3');
  }, 950);

  const circleSizeInterpolation = circleAnimation.interpolate({
    inputRange: [0, 0.5],
    outputRange: [0, wp('15%')], // Responsive circle size
  });

  const circlePositionInterpolation = circleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [wp('-2%'), 0], // Responsive circle position
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [
              { scale: circleSizeInterpolation },
              { translateX: circlePositionInterpolation },
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
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  circle: {
    backgroundColor: '#a34243',
    width: wp('8%'), // Responsive circle width
    height: wp('8%'), // Responsive circle height
    borderRadius: wp('8%') / 2, // Responsive circle border radius
  },
});

export default SplashScreen2;
