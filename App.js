// App.js
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen1 from './src/Components/SplashScreens/SplashScreen1';
import SplashScreen2 from './src/Components/SplashScreens/SplashScreen2';
import SplashScreen3 from './src/Components/SplashScreens/SplashScreen3';
import SplashScreen4 from './src/Components/SplashScreens/SplashScreen4';
import IntroScreen from './src/Components/IntroScreen/IntroScreen';
import UserSplash from './src/Components/SplashScreens/UserSplash';
import TermandServic from './src/Components/UserScreen.js/TermandServic';
import FAQ from './src/Components/UserScreen.js/FAQ';
import PrivacyPolicy from './src/Components/UserScreen.js/PrivacyPolicy';
import IntroRejister from './src/Components/Register/IntroRejister';
import Login from './src/Components/Register/Login';
import Registration from './src/Components/Register/Registration';
import Forget from './src/Components/Register/Forget';
import OTP from './src/Components/Register/OTP';
import Camera from './src/Components/Camera/Camera';
import RoofDesign from './src/Components/RoofDesign/RoofDesign';
import ChooseTexture from './src/Components/RoofDesign/ChooseTexture';
import ListAccordion from './src/Components/UserScreen.js/ListAccordion';
import NewPassword from './src/Components/Register/NewPassword';
import CityTexture from './src/Components/RoofDesign/CityTexture';
import Circle from './src/Components/RoofDesign/Circle';
import Slider from './src/Components/IntroScreen/Slider';
import CircleCarousel from './src/Components/RoofDesign/Circle';
import { StatusBar } from 'react-native'; 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent"   barStyle="dark-content" /> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen2" screenOptions={{ headerShown: false, }}>
        {/* <Stack.Screen name="SplashScreen1" component={SplashScreen1} /> */}
        <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
        <Stack.Screen
  name='SplashScreen3'
  component={SplashScreen3}
/>

<Stack.Screen name='SplashScreen4' component={SplashScreen4}/>
<Stack.Screen name='IntroScreen' component={IntroScreen}/>
<Stack.Screen name='UserSplash' component={UserSplash}/>
<Stack.Screen name='Slider' component={Slider}/>
<Stack.Screen name='TermandServic' component={TermandServic}/>
<Stack.Screen name='FAQ' component={FAQ}/>
<Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy}/>
<Stack.Screen name='IntroRejister' component={IntroRejister}/>
<Stack.Screen name='Login' component={Login}/>
<Stack.Screen name='Registration' component={Registration}/>
<Stack.Screen name='Forget' component={Forget}/>
<Stack.Screen name='OTP' component={OTP}/>
<Stack.Screen name='Camera' component={Camera}/>
<Stack.Screen name='RoofDesign' component={RoofDesign}/>
<Stack.Screen name='ChooseTexture' component={ChooseTexture}/>
<Stack.Screen name='ListAccordion' component={ListAccordion}/>
<Stack.Screen name='NewPassword' component={NewPassword}/>
<Stack.Screen name='CityTexture' component={CityTexture}/>
<Stack.Screen name='CircleCarousel' component={CircleCarousel}/>
<Stack.Screen name='Circle' component={Circle}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    </>
  );
};
