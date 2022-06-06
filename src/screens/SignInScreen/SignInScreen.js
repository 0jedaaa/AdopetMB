import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import Backg from '../../../assets/images/background-dog.png'
import Patinha1 from '../../../assets/images/patinhas1.png';
import Patinha2 from '../../../assets/images/patinhas2.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
function SignInScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();


  const onSignInPressed = () => {

    navigation.navigate('Home')
  }
  const onBackPress = () => {
 
    navigation.navigate('SocialScreen')
    
  }
  const onForgotSenhaPressed = () => {
    console.warn("onForgotSenhaPressed");
    navigation.navigate('ForgotPassword')
  }

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={styles.logo} resizeMode="contain"
      />
     
      <CustomInput placeholder="E-mail" value={email} setValue={setEmail} />
      <CustomInput placeholder="Senha" value={senha} setValue={setSenha} secureTextEntry={true} />
      <CustomButton text="Entrar" onPress={onSignInPressed} />
      <CustomButton text="Voltar" onPress={onBackPress} type="TERTIARY"/>
      <CustomButton text="Esqueceu a senha?" onPress={onForgotSenhaPressed} type="TERTIARY" />

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
      <Image
          source={Backg}
          style={styles.backg} resizeMode="contain"
        />
    </View>
    
  );
}
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  patinhas: {

    opacity: 0.5,
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
    zIndex: -2,
    position: 'absolute'
  },
});
export default SignInScreen;