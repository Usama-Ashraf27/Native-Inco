import { StyleSheet, Text, View ,Image,TouchableWithoutFeedback,} from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();
    const handleCameraPress = () => {
        console.log("Press");
      navigation.navigate('RoofDesign')
      };
    
  return (
    <View style={styles.footerContainer}>
    <Image source={require('../../Images/Footer.png')} style={styles.footerImage} />
    <View style={styles.footerCameraContainer}>
      <TouchableWithoutFeedback onPress={handleCameraPress}>
        <Image source={require('../../Images/camera.png')} style={styles.footerCamera} />
      </TouchableWithoutFeedback>
    </View>
  </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    footerContainer: {
        width: wp('100%'),
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
})