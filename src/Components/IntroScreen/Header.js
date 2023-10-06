import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import UserSplash from '../SplashScreens/UserSplash';

const Header = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSearchPress = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleGoBack}
      >
        <Image
          source={require('../../Images/Introassests/Back.png')}
          style={{ width: wp('5%'), height: wp('5%') }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.searchButton}
        onPress={handleSearchPress}
      >
        <Image
          source={require('../../Images/Introassests/Search.png')}
          style={{ width: wp('5%'), height: wp('5%') }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
          <UserSplash closeModal={closeModal}/>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp('5%'),
    marginVertical: wp('11%'),
  },
  backButton: {
    padding: wp('2%'),
  },
  searchButton: {
    padding: wp('2%'),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position:'absolute'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
  },
});

export default Header;
