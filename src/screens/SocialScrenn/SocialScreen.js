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

function SocialScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();


  const onSignInEmail = () => {

    navigation.navigate('SignIn')
  }

  const onSignUpPress = () => {
  
    navigation.navigate('SignUp')
  }
  const onSignUpOngPress = () => {

    navigation.navigate('OngsSign')
    
  }
  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={styles.logo} resizeMode="contain"
      />
     <CustomButton text="Entrar com E-mail" onPress={onSignInEmail} bgColor="#F8F8FF" fgColor="#808080" />
      <SocialSignInButton/>
      <CustomButton text="Não tem uma conta? Cadastra-se" onPress={onSignUpPress} type="TERTIARY"/>
      <CustomButton text="PARCERIA ONG'S" onPress={onSignUpOngPress} type="TERTIARY" />
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
});
export default SocialScreen;