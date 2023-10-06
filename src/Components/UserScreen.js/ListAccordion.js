import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ListAccordion = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const toggleAccordion1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const toggleAccordion2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion1} style={styles.header}>
        
        <View>

          <Text style={styles.headerText}>
            Header Title 1
          </Text>
        </View>
        <Image
          source={require('../../Images/Download.png')} // Replace with your image path
          style={styles.image}
        />
      </TouchableOpacity>
      {isExpanded1 && (
        <ScrollView style={styles.scrollContainer}>
          <View>
            <Text style={styles.bodyText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            </Text>
            <Text style={styles.bodyText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            </Text>
          </View>
        </ScrollView>
      )}
      <TouchableOpacity onPress={toggleAccordion2} style={styles.header}>
        <View>
          <Text style={styles.headerText}>
            Header Title 2
          </Text>
        </View>
        <Image
          source={require('../../Images/Download.png')} // Replace with your image path
          style={styles.image}
        />
      </TouchableOpacity>
      {isExpanded2 && (
        <ScrollView style={styles.scrollContainer}>
          <View>
            <Text style={styles.bodyText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            </Text>
          </View>
        </ScrollView>
      )}
    </View></ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: wp('2%'),
    
    height:hp('35%')
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('3%'),
  },
  headerText: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    maxWidth: wp('40%'),
  },
  bodyText: {
    fontSize: hp('2%'),
  },
  image: {
    width: wp('4%'),
    height: hp('2.5%'),
  },
  scrollContainer: {
    maxHeight: hp('45%'), // Set a maximum height for the scrollable content
    padding: wp('2%'),
  },
});

export default ListAccordion;
