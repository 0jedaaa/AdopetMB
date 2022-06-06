import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import ChatIcon from '../../../assets/images/chatIcon.png'
import ConfigIcon from '../../../assets/images/configIcon.png'
import PerfilIcon from '../../../assets/images/perfilIcon.png';
import AjudaIcon from '../../../assets/images/ajudaIcon.png';
import NavbarSide from '../../components/Navbar/Side'
import { useNavigation } from '@react-navigation/native';
import CardPets from '../../components/CardPets/CardPets';

function SideScreen() {

    const navigation = useNavigation();
    return (


        <View style={styles.container}>
            <NavbarSide />

            <View style={styles.card}>

                <View style={styles.sideImages}>


                    <Image style={styles.Image} source={ChatIcon} />


                    <Image style={styles.Image} source={PerfilIcon} />


                    <Image style={styles.Image} source={AjudaIcon} />


                    <Image style={styles.Image} source={ConfigIcon} />



                </View>
                <View style={styles.TextSide}>
                    <Text style={styles.text}>Chat</Text>
                    <Text style={styles.text}>Perfil</Text>
                    <Text style={styles.text}>Ajuda</Text>
                    <Text style={styles.text}>Configurações</Text>
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        height: 'auto',
        flex: 1,
        backgroundColor: '#FDC623',

    },
    sideImages: {
        backgroundColor: "#FDC623",
        padding: 30,
    },
    Image: {
        marginBottom: 30,
    },
    text: {
        fontWeight: 'bold',
        marginBottom: 65,
        

    },
    TextSide: {
        padding: 35,
       

    },
    card: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
     
    },
});

export default SideScreen;