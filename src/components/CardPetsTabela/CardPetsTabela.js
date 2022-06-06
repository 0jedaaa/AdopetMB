import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Vector from '../../../assets/images/Vector.png';
import Golden from '../../../assets/images/Golden.png';
import { TextInput } from 'react-native-web';
function CardPets({onPress}) {

    return (
        <View style={styles.container}>

            <View style={styles.Card}>
                    <View style={styles.TextImage}>
                        <Text style={styles.texto}> Nome: Bucky</Text>
                        <Text style={styles.texto}> Raça: Golden</Text>
                        <Text style={styles.texto}> Genero: Macho</Text>
                        <Text style={styles.texto}> Informações: 2 anos Vacinado</Text>
                    </View>
                    <View style={styles.cardImage}>
                        <Image source={Golden}
                        />
                    </View>
               
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'center',
   
    },
    Card: {
        width: "95%",
        backgroundColor: "#FDC623",
        padding: 10,
        borderRadius: 15,
        flexDirection: 'row',
    },
    cardImage: {

        paddingStart: 30,
     
    },
    TextImage: {
    
        paddingTop: 5,
        flexDirection: 'column',
    },
    texto:{
        margin: 2,
    },
});

export default CardPets;