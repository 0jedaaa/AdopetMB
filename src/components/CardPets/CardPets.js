import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Vector from '../../../assets/images/Vector.png';
import DogExample from '../../../assets/images/DogExample.png';
import { TextInput } from 'react-native-web';
function CardPets({onPress, text1,text2,text3, img1, img2, img3, titulo}) {

    return (
        <View style={styles.container}>
            <View style={styles.Card}>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.cardTitle}>
                        <Text style={styles.cardText}>{titulo}</Text>
                        <Image source={Vector} />
                    </View>

                    <View style={styles.cardImage}>
                        <Image source={img1}
                        />
                        <Image source={img2}
                        />
                        <Image source={img3}
                        />
                    </View>
                    <View style={styles.TextImage}>
                        <Text>
                            {text1}
                        </Text>
                        <Text>
                            {text2}
                        </Text>
                        <Text>
                           {text3}
                        </Text>
                    </View>
                </TouchableOpacity>
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
    },
    cardText: {
        fontWeight: 'bold',
        marginStart: 10,
    },
    cardTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardImage: {
        paddingStart: 10,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    TextImage: {
        paddingStart: 10,
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default CardPets;