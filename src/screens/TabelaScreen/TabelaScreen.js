import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import DogIcon from '../../../assets/images/dogicon.png'
import CatIcon from '../../../assets/images/caticon.png'
import BirdIcon from '../../../assets/images/birdicon.png'
import NavbarTabela from '../../components/Navbar/Tabela'
import { useNavigation } from '@react-navigation/native';
import CardPetsTabela from '../../components/CardPetsTabela';



function TabelaScreen() {
    const navigation = useNavigation();
    const onSideBar = () => {
   
        navigation.navigate('Side')
      }

    return (
   
           
        <View style={styles.container}>
                 <ScrollView>
             <NavbarTabela/>
            <CardPetsTabela/>
            <CardPetsTabela/>
            <CardPetsTabela/>
            <CardPetsTabela/>
            <CardPetsTabela/>
            <CardPetsTabela/>
            <CardPetsTabela/>
            </ScrollView>
        </View>
  
    )
}
const styles = StyleSheet.create({
    container: {
        height: 'auto',
        flex: 1,
        backgroundColor: '#FFDC62',
     
    },
    imagesView: {
        paddingStart: 10,
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    TextView: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default TabelaScreen;