import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Navigation from './src/navigation';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure(config);

function App() {
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

export default App;