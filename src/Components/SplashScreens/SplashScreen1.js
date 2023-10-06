import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SplashScreen1 = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('SplashScreen2');
  //   }, 2000); // Delay for 2 seconds
  // }, []);

  return (
    <View style={styles.container}>
      <Text>Screen</Text>
      <Button
        title="Go to You want"
        onPress={() => navigation.navigate('SplashScreen2')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default SplashScreen1;
