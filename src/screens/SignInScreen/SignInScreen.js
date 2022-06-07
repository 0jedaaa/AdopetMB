import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Alert, TextInput } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import Backg from '../../../assets/images/background-dog.png'
import Patinha1 from '../../../assets/images/patinhas1.png';
import Patinha2 from '../../../assets/images/patinhas2.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { useForm, Controller } from 'react-hook-form';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const SignInScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = async data => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.signIn(data.username, data.password);
      navigation.navigate('Home')
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);

  };
  const onBackPress = () => {

    navigation.navigate('SocialScreen')

  }
  const onForgotSenhaPressed = () => {
    
    navigation.navigate('ForgotPassword')
  }

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={styles.logo} resizeMode="contain"
      />

      <CustomInput 
      placeholder="Nome de Usuario" 
      name="username" 
      control={control} 
      rules={
        {
          required: 'Nome de Usuario é obrigatorio!'}} />


      <CustomInput placeholder="Senha" secureTextEntry={true} name="password" control={control} 
      rules={{
        required: 'Senha é obrigatório!',
        minLength: {
          value: 3,
          message: 'Senha nao pode ser menos do que 3 Caracteres',
        },

      }} />




      <CustomButton text={loading ? 'Carregando...' : 'Entrar'} onPress={handleSubmit(onSignInPressed)} />

      <CustomButton text="Voltar" onPress={onBackPress} type="TERTIARY" />
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