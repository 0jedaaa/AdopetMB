import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Logo from '../../../assets/images/foto.png';
import Backg from '../../../assets/images/background-dog.png'
import Patinha1 from '../../../assets/images/patinhas1.png';
import Patinha2 from '../../../assets/images/patinhas2.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import { useNavigation } from '@react-navigation/native';
function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaRepeat, setSenhaRepeat] = useState('');
  const navigation = useNavigation();

  const onRegisterPressed = () => {
   
    navigation.navigate('ConfirmEmail')
  }

  const onSigInPress = () => {
    
    navigation.navigate('SocialScreen')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={styles.logo} resizeMode="contain"
        />

        <CustomInput placeholder="Nome Completo" value={email} setValue={setEmail} />
        <CustomInput placeholder="E-mail" value={email} setValue={setEmail} />
        <CustomInput placeholder="Telefone" value={telefone} setValue={setTelefone} />
        <CustomInput placeholder="Senha" value={senha} setValue={setSenha} secureTextEntry={true} />

        <CustomButton text="Cadastrar" onPress={onRegisterPressed} />
        <CustomButton text="Ja possui uma conta ? Entrar" onPress={onSigInPress} type="TERTIARY" />

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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  root: {

    flex: 1,
    alignItems: 'center',
  },
  patinhas: {

    opacity: 0.25,
  },
  logo: {
    margin: 20,
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
export default SignUpScreen;