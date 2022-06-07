import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Pressable,TouchableOpacity  } from 'react-native';
import DogIcon from '../../../assets/images/dogicon.png'
import CatIcon from '../../../assets/images/caticon.png'
import BirdIcon from '../../../assets/images/birdicon.png'
import Navbar from '../../components/Navbar'
import { useNavigation } from '@react-navigation/native';
import CardPets from '../../components/CardPets/CardPets';
import DogExample1 from '../../../assets/images/DogExample.png';
import DogExample2 from '../../../assets/images/DogExample2.png';
import DogExample3 from '../../../assets/images/DogExample3.png';
import CatExample1 from '../../../assets/images/CatExample1.png';
import CatExample2 from '../../../assets/images/CatExample2.png';
import CatExample3 from '../../../assets/images/CatExample3.png';
import OutroExample1 from '../../../assets/images/OutroExample1.png';
import OutroExample2 from '../../../assets/images/OutroExample2.png';
import OutroExample3 from '../../../assets/images/OutroExample3.png';
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
                    <CardPets onPress={onDogsPress} img1={DogExample1} img2={DogExample2} img3={DogExample3} text1="Poppy" text2="Dory" text3="Nick"titulo="Cachorros adicionados recentemente"/>
                    <CardPets onPress={onCatsPress} img1={CatExample1} img2={CatExample2} img3={CatExample3}  text1="Schrödinger" text2="Garfield" text3="Frajola"  titulo="Gatos adicionados recentemente"/>
                    <CardPets onPress={onOtherPress} img1={OutroExample1} img2={OutroExample2} img3={OutroExample3}text1="Loro" text2="Tartuguita" text3="Lili" titulo="Outros Pets adicionados recentemente" />
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