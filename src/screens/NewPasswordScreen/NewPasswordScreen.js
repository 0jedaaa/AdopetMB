import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import Logo from '../../../assets/images/foto.png';
import Backg from '../../../assets/images/background-dog.png'
import Patinha1 from '../../../assets/images/patinhas1.png';
import Patinha2 from '../../../assets/images/patinhas2.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth, Controller } from 'aws-amplify';
function NewPasswordScreen() {
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm();

  const onConfirmPressed = async data => {
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      navigation.navigate('SignIn');
    }
    catch (e) {
      Alert.alert('Oops', e.message);
    }
  //  navigation.navigate('SocialScreen')
  }
  const onBackPress = () => {

    navigation.navigate('SignIn')
  }

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Resetar Senha</Text>


        <CustomInput name="username" control={control} placeholder="Nome do Usuario" rules={{
          required: 'Nome do Usuario Obrigatorio!'
        }} />
        <CustomInput name="code" control={control} placeholder="Codigo de Confirmação" rules={{
          required: 'Codigo de Confirmação Obrigatorio!'
        }} />
        <CustomInput name="password" control={control} secureTextEntry={true} placeholder="Nova Senha" rules={{
          required: 'Senha é Obrigatorio!',
          minLength: { value: 8, message: 'Senha não pode ter menos do que 8 caracteres!' }

        }} />

        <CustomButton text="Confirmar" onPress={handleSubmit(onConfirmPressed)} />
        <CustomButton text="Voltar" onPress={onBackPress} type="TERTIARY" />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 30,
  },
});
export default NewPasswordScreen;