import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import Logo from '../../../assets/images/foto.png';
import Backg from '../../../assets/images/background-dog.png'
import Patinha1 from '../../../assets/images/patinhas1.png';
import Patinha2 from '../../../assets/images/patinhas2.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { Auth, Controller } from 'aws-amplify';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const SignUpScreen = () => {
  const {control, handleSubmit, watch } = useForm();
  const pwd = watch('password');
  const navigation = useNavigation();

  const onRegisterPressed = async data => {
    const { username, password, email, name } = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, name, preferred_username: username },
      });
      navigation.navigate('ConfirmEmail', {username});
    }
    catch (e) {
      Alert.alert('Oops', e.message);
    }

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


        <CustomInput name="name" control={control} placeholder="Nome Completo" rules={{
          required: 'Nome Completo é Obrigatorio!',
          minLength: { value: 3, message: 'Nome não pode ter menos do que 3 caracteres!' }

        }} />
        <CustomInput name="username" control={control} placeholder="Nome de Usuario" rules={{
          required: 'Nome de Usuario é Obrigatorio!',
          minLength: { value: 3, message: 'Nome não pode ter menos do que 3 caracteres!' }

        }} />
        <CustomInput name="email" control={control} placeholder="E-mail" rules={{ pattern: { value: EMAIL_REGEX, message: 'Email invalido!' } }} />

        <CustomInput name="password" control={control} placeholder="Senha" secureTextEntry={true}
          rules={{
            required: 'Senha é Obrigatorio!',
            minLength: { value: 8, message: 'Senha não pode ter menos do que 8 caracteres!' }

          }} />
        <CustomInput name="password-repeat" control={control} placeholder="Digite a senha novamente" secureTextEntry={true}
          rules={{
            validate: value => value == pwd || 'Senha não confere!',
          }

          } />
        <CustomButton text="Cadastrar" onPress={handleSubmit(onRegisterPressed)} />
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