import React, { useState } from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');
const itemWidth = wp('30%');

const Circle = () => {
  const data = [
    { id: '1', source: require('../../Images/RoofDesign/Path.png'), text: 'Image 1' },
    { id: '2', source: require('../../Images/RoofDesign/Dutch.png'), text: 'Dutch' },
    { id: '3', source: require('../../Images/RoofDesign/Bannet.png'), text: 'Bannet' },
    { id: '4', source: require('../../Images/RoofDesign/Path.png'), text: 'Image 4' },
    { id: '5', source: require('../../Images/RoofDesign/Bannet.png'), text: 'Bannet' },
    { id: '6', source: require('../../Images/RoofDesign/Dutch.png'), text: 'Image 6' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderCarouselItem = ({ item, index }) => {
    const isCurrentItem = index === currentIndex;
    const scale = isCurrentItem ? 1.3 : 0.8; // Adjust the scale factor as needed
    const opacity = isCurrentItem ? 1.0 : 0.5;
    

    return (
      <View style={styles.carouselItem}>
        <View style={[styles.circularContainer, { transform: [{ scale }] }]}>
          <Image source={item.source} style={styles.carouselImage} />
        </View>
        <Text style={[styles.imageText, { opacity }]}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderCarouselItem}
        sliderWidth={width}
        itemWidth={itemWidth}
        onSnapToItem={(index) => setCurrentIndex(index)}
        loop
        loopClonesPerSide={data.length}
        layout={'default'}
        firstItem={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: hp('3.5%'),
  },
  carouselItem: {
    width: itemWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: itemWidth,
    height: itemWidth,
    borderRadius: itemWidth / 2,
    backgroundColor: '#EFEFEF',
  },
  carouselImage: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  imageText: {
    marginTop: 6,
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default Circle;
