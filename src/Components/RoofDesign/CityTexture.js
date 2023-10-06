import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const data = [
  {
    id: '1',
    country: 'BMI (Italy) ',
    flag: require('../../Images/flags/itlay.png'),
    images: [
      require('../../Images/flags/italy1.png'),
      require('../../Images/flags/italy2.png'),
      require('../../Images/flags/Italy3.png'),
      require('../../Images/flags/italy1.png'),
      require('../../Images/flags/italy2.png'),
      require('../../Images/flags/Italy3.png'),
      require('../../Images/flags/italy1.png'),
      require('../../Images/flags/italy2.png'),
      require('../../Images/flags/Italy3.png'),
      require('../../Images/flags/italy1.png'),
      require('../../Images/flags/italy2.png'),
      require('../../Images/flags/Italy3.png'),
    ],
  },
  {
    id: '2',
    country: 'COBERT (Spain) ',
    flag: require('../../Images/flags/spain.png'),
    images: [
      require('../../Images/flags/italy2.png'),
      require('../../Images/flags/italy1.png'),
      require('../../Images/flags/Italy3.png'),
      require('../../Images/flags/italy2.png'),
      require('../../Images/flags/italy1.png'),
      require('../../Images/flags/Italy3.png'),
    ],
  },
  {
    id: '3',
    country: 'Cobert (Portugal) ',
    flag: require('../../Images/flags/flag.png'),
    images: [
      require('../../Images/flags/italy1.png'),
      require('../../Images/flags/italy2.png'),
      require('../../Images/flags/Italy3.png'),
    ],
  },
  // Add more countries and images here
];

const CityTexture = () => {
  const [selectedItem, setSelectedItem] = useState(data[0].id); 
  const [selectedImages, setSelectedImages] = useState(data[0].images); 
 
  const handleItemClick = (itemId, images) => {
    setSelectedItem(itemId);
    setSelectedImages(images);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.item,
        selectedItem === item.id && { backgroundColor: '#9D3839' },
      ]}
      onPress={() => handleItemClick(item.id, item.images)}
    >
      <Image source={item.flag} style={styles.flag} />
      <Text style={[styles.countryName, selectedItem === item.id && { color: 'white' }]}>
        {item.country}
      </Text>
    </TouchableOpacity>
  );

  const renderImages = () => {
    const itemsPerRow = 4;
    const rows = Math.ceil(selectedImages.length / itemsPerRow);
    const imageRows = [];

    for (let i = 0; i < rows; i++) {
      const rowImages = selectedImages.slice(i * itemsPerRow, (i + 1) * itemsPerRow);
      const imageRow = (
        <View key={i} style={styles.imageRow}>
          {rowImages.map((image, index) => (
            <Image key={index} source={image} style={styles.selectedImage} />
          ))}
        </View>
      );
      imageRows.push(imageRow);
    }

    return imageRows;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
      <View style={styles.selectedCountryContainer}>
        <Text style={styles.selectedCountryText}>
          {selectedItem ? `${data.find((item) => item.id === selectedItem).country}` : 'Select a country'}
        </Text>
        {selectedImages.length > 0 && (
          <ScrollView style={styles.imageScrollView}>
            {renderImages()}
          </ScrollView>
        )}
      </View>
      <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle button press here
            console.log('Done');
          }}
        >
          <Text style={styles.buttonText}>Done</Text>
          <Image
            source={require('../../Images/tick.png')} // Replace with the actual path to your tick image
            style={styles.tickImage}
          />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      position:'absolute'
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
    
      borderRadius: wp('6%'), // Use percentage-based border radius
      backgroundColor: '#E0E0E0',
      height: hp('5.8%'),
    },
    flag: {
      width: wp('10%'), // Use percentage-based width
      height: hp('5%'), // Use percentage-based height
      
    },
    countryName: {
      fontSize: hp('2.5%'),
      color: 'black',
    },
    selectedCountryContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp('2%'),
    },
    selectedCountryText: {
      fontSize: hp('2.5%'),
      fontWeight: 'bold',
      marginBottom: hp('2%'),
    },
    imageScrollView: {
      height: hp('24%'),
    },
    imageRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    selectedImage: {
      width: wp('20%'), // Use percentage-based width
      height: hp('12%'), // Use percentage-based height
      borderRadius: wp('3%'), // Use percentage-based border radius
      marginRight: wp('2%'), // Use percentage-based margin
      marginBottom: hp('1%'), // Use percentage-based margin
    },
    button: {
      flexDirection: 'row', // Align text and image horizontally
      width: wp('60%'),
      backgroundColor: '#A14142',
      elevation: 8,
      borderRadius: wp('10%'), // Use percentage-based border radius
      padding: hp('2%'), // Use percentage-based padding
      marginTop:hp('3%'),
      justifyContent: 'center',
      alignSelf: 'center', 
      
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
     
      marginRight: wp('2%'), // Use percentage-based margin
    },
    tickImage: {
      width: wp('5.3%'), // Use percentage-based width
      height: hp('2%'), // Use percentage-based height
    },
  });

export default CityTexture;


