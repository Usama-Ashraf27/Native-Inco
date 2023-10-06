import { StyleSheet,  View, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Camera = ({ navigation }) => {
  const handleCameraPress = () => {
    console.log("Press");
  navigation.navigate('RoofDesign')
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Images/Cameraback.png')}
        resizeMode="cover"
        style={styles.image}
      >
        {/* Your camera content goes here */}
      </ImageBackground>
      <View style={styles.footerContainer}>
        <Image source={require('../../Images/Footer.png')} style={styles.footerImage} />
        <View style={styles.footerCameraContainer}>
          <TouchableWithoutFeedback onPress={handleCameraPress}>
            <Image source={require('../../Images/camera.png')} style={styles.footerCamera} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: wp('100%'),
    height: hp('103%'), // Adjust the height as needed
  },
  footerContainer: {
    width: wp('100%'),
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignItems: 'center',
  },
  footerImage: {
    width: wp('100%'),
    height: hp('17%'),
  },
  footerCameraContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: wp('100%'),
    height: hp('17%'),
  },
  footerCamera: {
    width: wp('9.5%'),
    height: hp('4%'),
   marginLeft:wp('2.8%'),
    marginBottom: hp('5.7%'),
  },
});
