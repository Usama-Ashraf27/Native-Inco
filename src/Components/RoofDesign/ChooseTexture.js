import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CityTexture from './CityTexture';

const { width } = Dimensions.get('window');

const ChooseTexture = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [showCityTexture, setShowCityTexture] = useState(false);

  const data = [
    { id: '1', source: require('../../Images/RoofDesign/Flat.png'), text: 'Flat' },
    { id: '2', source: require('../../Images/RoofDesign/Plana.png'), text: 'Plana' },
    { id: '3', source: require('../../Images/RoofDesign/Portuguese.png'), text: 'Portuguese' },
    { id: '4', source: require('../../Images/RoofDesign/Flat.png'), text: 'Flat' },
  ];

  const rotationValue = useRef(new Animated.Value(0)).current;

  const renderCarouselItem = ({ item, index }) => {
    const distance = index - currentIndex;
    const hideText = distance !== 1;

    const rotateAnimation = rotationValue.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: ['-25deg', '0deg', '25deg'],
    });

    const animatedStyle = {
      transform: [{ rotate: rotateAnimation }],
    };

    return (
      <View style={styles.carouselItem}>
        <Animated.View style={[styles.container, animatedStyle]}>
          <Image source={item.source} style={styles.carouselImage} />
        </Animated.View>
        {!hideText && <Text style={styles.carouselText}>{item.text}</Text>}
      </View>
    );
  };

  const handleSnapToItem = (index) => {
    setCurrentIndex(index);
    // Apply a rotation animation when the item changes
    Animated.timing(rotationValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      rotationValue.setValue(0);
    });
  };

  const handleContinuePress = () => {
    // Handle button press here
    console.log('Done');
    setShowCityTexture(true); // Set showCityTexture to true to render the CityTexture component
  };

  return (
    <View style={styles.container}>
      {!showCityTexture ? (
        <Carousel
          data={data}
          renderItem={renderCarouselItem}
          sliderWidth={width}
          itemWidth={width / 3}
          inactiveSlideOpacity={0.7}
          inactiveSlideScale={0.85}
          layout={'default'}
          loop={true}
          loopClonesPerSide={1}
          onSnapToItem={handleSnapToItem}
          firstItem={1}
          decelerationRate={0.9}
        />
      ) : (
        <View style={styles.cityTextureContainer}>
          <CityTexture />
        </View>
      )}
      {!showCityTexture && (
        <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp('0.5%'),
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: hp('2%'),
  },
  carouselImage: {
    width: wp('45%'),
    height: wp('60%'),
  },
  carouselText: {
    fontSize: 18,
  },
  button: {
    flexDirection: 'row',
    width: wp('60%'),
    backgroundColor: '#A14142',
    elevation: 8,
    borderRadius: wp('10%'),
    padding: hp('2%'),
    marginTop: hp('3%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: wp('2%'),
  },
  cityTextureContainer: {
    right: hp('23.5%'),
    marginTop: hp('1.5%'),
  },
  cityTextureText: {
    fontSize: 18,
  },
});

export default ChooseTexture;
