import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import React from 'react';

import Navigation from './src/navigation';
export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <Navigation/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDC623',
  },
});
