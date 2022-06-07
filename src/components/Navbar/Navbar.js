import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import People from '../../../assets/images/people-main.png';
import Menu from '../../../assets/images/menu-main.png'
import { useNavigation } from '@react-navigation/native';

function Navbar({onPress}) {

    return (

            <View style={styles.navbar}>
              <TouchableOpacity onPress={onPress}>
                <Image source={Menu}/>
                </TouchableOpacity>
                <Image
                    source={People}

                />
                <Text style={styles.text}>sorocaba</Text>
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
  },
  text:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:10,
    marginStart:10,
  },
});

export default Navbar;