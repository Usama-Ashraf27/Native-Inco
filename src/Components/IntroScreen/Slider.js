import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';

const images = [
  require('../../Images/Introassests/pic-1.png'),
  require('../../Images/Introassests/pic-4.png'),
  require('../../Images/Introassests/pic-3.png'),
  require('../../Images/Introassests/pic-4.png'),
];

const texts = [
  'Share a Snapshot of\n Your Home',
  'Roof It Your Way,\n Right Away',
  'Shape Your Roof, Shape \nYour Style',
  'Coat Your Roof in a \n World of Hues',
];

const Slider = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentText, setCurrentText] = useState(texts[0]);
  const intervalRef = useRef(null);
  const isPaused = useRef(true);

  const onIndexChanged = (index) => {
    setActiveIndex(index);
    setCurrentImage(images[index]);
    setCurrentText(texts[index]);
  };

  useEffect(() => {
    if (!isPaused.current) {
      intervalRef.current = setInterval(() => {
        const newIndex = (activeIndex + 1) % images.length;
        if (newIndex !== 0) {
          onIndexChanged(newIndex);
        } else {
          clearInterval(intervalRef.current);
        }
      }, 2000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [activeIndex]);

  const pauseInterval = () => {
    isPaused.current = true;
  };

  const resumeInterval = () => {
    isPaused.current = false;
  };

  const renderButton = () => (
    <TouchableOpacity style={styles.button} onPress={() => handleButtonPress()}>
      <Text style={styles.buttonText}>
        {activeIndex === images.length - 1 ? 'Get Started' : 'Continue'}
      </Text>
    </TouchableOpacity>
  );

  const handleButtonPress = () => {
    navigation.navigate('IntroRejister');
  };

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      <View style={styles.dots}>
        {images.map((_, dotIndex) => (
          <View
            key={dotIndex}
            style={[
              styles.dot,
              { backgroundColor: activeIndex === dotIndex ? '#FF4848' : '#FFFFFF' },
            ]}
          />
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../Images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      {/* <View style={{backgroundColor:'red'}}> */}
        <Carousel
        data={images}
        renderItem={({ item, index }) => (
          <View style={[styles.slide]} onTouchStart={pauseInterval} onTouchEnd={resumeInterval}>
            <Image source={item} style={styles.image} resizeMode="contain" />
          </View>
        )}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={(index) => onIndexChanged(index)}
        autoplay={true}
        autoplayInterval={3000}
        
        loopClonesPerSide={images.length}
      />

      
      <View style={{position: 'absolute', bottom: hp('25%') }}>
      <Text style={styles.slideText}>{currentText}</Text>
      {renderDots()}
      </View>
      <View style={{position: 'absolute', bottom: hp('13%') }}>
      {renderButton()}
      </View>

      
{/* </View> */}
      {/* {renderButton()} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    paddingTop:hp('3%'),
    position:'absolute',
    zIndex:12,
    top:10
  },
  logo: {
    width: wp('30%'),
    height: hp('14%'),   
 
    
  },
  slide: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height ,
top:hp('-2%')
  },
  image: {
    width: '105%',
    height: '100%',
    
},
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dots: {
    flexDirection: 'row',
  },
  dot: {
    width: wp('10%'),
    height: hp('1%'),
    borderRadius: 5,
    marginHorizontal: wp('1%'),
  },
  button: {
    backgroundColor: '#A14142',
    paddingVertical: hp('1.7%'),
    paddingHorizontal: wp('12.5%'),
    borderRadius: 25,
    shadowColor: '#A14142',
    elevation: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  slideText: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: hp(2),
    color: 'white',
  },
});

export default Slider;
