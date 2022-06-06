import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import Backg from '../../../assets/images/background-dog.png'
import Patinha1 from '../../../assets/images/patinhas1.png';
import Patinha2 from '../../../assets/images/patinhas2.png'
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

function OngsScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();

  const onSignInPressed = () => {

    navigation.navigate('SocialScreen')
  }

  const onBackPress = () => {
  
    navigation.navigate('SocialScreen')
  }

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={styles.logo} resizeMode="contain"
      />
        <Text style={styles.title}>
        Se você faz parte de uma
        ONG e deseja se juntar à nós
        da AdoPet, pedimos que entre
        em contato pelo nosso E-mail
        </Text>
      <CustomButton text="Clique aqui" onPress={onSignInPressed} />
      <CustomButton text="Voltar" onPress={onBackPress} type="TERTIARY"/>
      <View style={styles.patinhasView}>
        <Image
          source={Patinha2}
          style={styles.patinhas} resizeMode="contain"
        />
               <Image
          source={Patinha1}
          style={styles.patinhas} resizeMode="contain"
        />
      </View>
      <View style={styles.dogView}>
      <Image
          source={Backg}
          style={styles.backg} resizeMode="contain"
        />
        </View>
    </View>
    
  );
}
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  patinhas: {
    opacity: 0.25,
  },
  patinhasView: {
    zIndex: -1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingTop: '130%',
  },
  backg: {
 
  },
  dogView:{

    zIndex: -2,
    position: 'absolute',
   
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    margin: 30,
    paddingBottom: 30,
},
});
export default OngsScreen;