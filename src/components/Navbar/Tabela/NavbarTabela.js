import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import Back from '../../../../assets/images/back.png';
import { useNavigation } from '@react-navigation/native';

function Navbar({onPress}) {

    return (

            <View style={styles.navbar}>
                <Image
                    source={Back}

                />
                <Text style={styles.text}>Cachorros</Text>
            </View>
    )
}
const styles = StyleSheet.create({
  navbar:{
      width: '100%',
      backgroundColor: "#FDC623",
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      borderBottomWidth: 1,
  },
  text:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:10,
    marginStart:10,
  },
});

export default Navbar;