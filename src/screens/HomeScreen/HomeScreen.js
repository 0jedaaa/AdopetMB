import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import DogIcon from '../../../assets/images/dogicon.png'
import CatIcon from '../../../assets/images/caticon.png'
import BirdIcon from '../../../assets/images/birdicon.png'
import Navbar from '../../components/Navbar'
import { useNavigation } from '@react-navigation/native';
import CardPets from '../../components/CardPets/CardPets';



function SignInScreen() {
    const navigation = useNavigation();
    const onSideBar = () => {
        
        navigation.navigate('Side')
    }
    const onDogsPress = () => {
      
        navigation.navigate('Tabela')
    }
    const onCatsPress = () => {
       
        navigation.navigate('Tabela')
    }
    const onOtherPress = () => {
        
        navigation.navigate('Tabela')
    }
    return (
        <ScrollView>
            <Pressable>
                <View style={styles.container}>
                    <Navbar onPress={onSideBar} />

                    <View style={styles.imagesView}>
                        <TouchableOpacity onPress={onDogsPress}>
                            <Image
                                source={DogIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onCatsPress}>
                            <Image
                                source={CatIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onOtherPress}>
                        <Image
                            source={BirdIcon}
                        />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.TextView}>
                        <Text>Cachoro</Text>
                        <Text>Gato</Text>
                        <Text>Outros</Text>
                    </View>
                    <CardPets onPress={onDogsPress} />
                    <CardPets onPress={onCatsPress} />
                    <CardPets onPress={onOtherPress} />
                </View>
            </Pressable>
        </ScrollView>
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

export default SignInScreen;