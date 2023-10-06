import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StackActions, useNavigation } from '@react-navigation/native';

const UserSplash = ({closeModal}) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigation = useNavigation();
 

  const handleNavigation = (route) => {
    console.log(`Navigating to ${route}`);
  };

  const translateY = useRef(new Animated.Value(isOpen ? hp('100%') : 0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: isOpen ? 0 : hp('100%'),
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    closeModal();
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <View style={styles.upperSide}>
<View style={styles.rowContainer}>
<View style={styles.column}>
  <Image
    source={require('../../Images/UserData/dpback.png')}
    style={styles.backgroundImage}
  />
  <Image
    source={require('../../Images/UserData/dp.png')}
    style={styles.dpImage}
  />
</View>

  <View style={styles.column}>
    <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Hi Kate,{"\n"}Welcome Back</Text>
  </View>
</View>
</View>
      <View style={styles.lowerSide}>
        <View style={styles.circularContent}> 
        <View style={styles.closeButtonContainer}>
        <TouchableOpacity onPress={handleClose}>
          <Image
            source={require('../../Images/UserData/close.png')}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      </View>
          <TouchableOpacity
            style={styles.rowContainer}
            onPress={() => handleNavigation('SettingScreen')}
          >
            <Image
              source={require('../../Images/UserData/settings.png')}
              style={styles.logo}
            />
            <Text style={styles.profileText}>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rowContainer}
            onPress={() => handleNavigation('UserScreen')}
          >
            <Image
              source={require('../../Images/UserData/user.png')}
              style={styles.logo}
            />
            <Text style={styles.profileText}>User</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rowContainer}
            onPress={() => navigation.navigate('FAQ')}
          >
            <Image
              source={require('../../Images/UserData/faq.png')}
              style={styles.logo}
            />
            <Text style={styles.profileText}>FAQ's</Text>
          </TouchableOpacity>
          <TouchableOpacity
  style={styles.rowContainer}
  onPress={() => navigation.navigate('TermandServic')}
>
  <Image
    source={require('../../Images/UserData/document.png')}
    style={styles.logo}
  />
  <Text style={styles.profileText}>Terms & Services</Text>
</TouchableOpacity>
          <TouchableOpacity
            style={styles.rowContainer}
            onPress={() => navigation.navigate('PrivacyPolicy')}
          >
            <Image
              source={require('../../Images/UserData/document.png')}
              style={styles.logo}
            />
            <Text style={styles.Text}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.rowContainer,]}
            onPress={() => navigation.navigate('PrivacyPolicy')}
          >
            <Image
              source={require('../../Images/UserData/logout.png')}
              style={[styles.logo,{width:wp('4%')}]}
            />
            <Text style={[styles.Text, { color: 'red' }]}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default UserSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }, 
   closeButtonContainer: {
    marginTop:'2%',
    marginLeft:'20%',
   alignSelf:'center'
    
  },
  upperSide: {
    flex: hp('25%'), 
    backgroundColor: 'transparent',
  },
  rowContainer: {
    flexDirection: 'row',
    width:'8%'
  },column: {
    flex: 0.5, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop:hp('5%')
  },
  backgroundImage: {
    position: 'absolute', 
    width: wp('43%'),
    height: hp('19%'),

  },
  dpImage: {
    width: wp('29%'),
    marginBottom:hp('2%'),
    height: hp('14%'),
  },
  closeIcon: {
    width: wp('10%'),
    height: wp('10%'),
  alignSelf:'flex-end',
  },
  
  lowerSide: {
    flex: hp('25%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp('6.5%'),
  },
  circularContent: {
    width: wp('155%'),
    aspectRatio: 1,
    borderRadius: 1000,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    paddingLeft: wp('40%'),
    paddingBottom: hp('35%'),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  logo: {
    width: wp('6%'),
    aspectRatio: 1,
    marginRight: wp('4%'),
  },
  Text: {
    fontSize: hp('2%'),
  },
});
