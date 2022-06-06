import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Vector from '../../../assets/images/Vector.png';
import DogExample from '../../../assets/images/DogExample.png';
import { TextInput } from 'react-native-web';
function CardPets({onPress}) {

    return (
        <View style={styles.container}>
            <View style={styles.Card}>
                <Pressable onPress={onPress}>
                    <View style={styles.cardTitle}>
                        <Text style={styles.cardText}>Cachorros adicionados recentemente</Text>
                        <Image source={Vector} />
                    </View>

                    <View style={styles.cardImage}>
                        <Image source={DogExample}
                        />
                        <Image source={DogExample}
                        />
                        <Image source={DogExample}
                        />
                    </View>
                    <View style={styles.TextImage}>
                        <Text>
                            poppy
                        </Text>
                        <Text>
                            poppy
                        </Text>
                        <Text>
                            poppy
                        </Text>
                    </View>
                </Pressable>
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