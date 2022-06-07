import { Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SocialScreen from '../screens/SocialScrenn';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import HomeScreen from '../screens/HomeScreen';
import OngsScreen from '../screens/OngsScreen';
import SideScreen from '../screens/SideScreen';
import TabelaScreen from '../screens/TabelaScreen/TabelaScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SocialScreen" component={SocialScreen}/>
          <Stack.Screen name="SignIn" component={SignInScreen}/>
          <Stack.Screen name="SignUp" component={SignUpScreen}/>
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
          <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="OngsSign" component={OngsScreen}/>
          <Stack.Screen name="Side" component={SideScreen}/>
          <Stack.Screen name="Tabela" component={TabelaScreen}/>
   
        </Stack.Navigator>
    </NavigationContainer>

  );
}


