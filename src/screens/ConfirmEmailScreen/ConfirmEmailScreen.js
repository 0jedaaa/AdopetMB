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
import { useNavigation, useRoute } from '@react-navigation/native';
import { Auth, Controller } from 'aws-amplify';
const ConfirmEmailScreen = () => {


  const route = useRoute();
  const navigation = useNavigation();

  const { control, handleSubmit, watch } = useForm({ defaultValues: { username: route?.params?.username }, });
  const username = watch('username');
  const onConfirmPressed = async data => {
    try {
      await Auth.confirmSignUp(data.username, data.code)
      navigation.navigate('SignIn')
    }
    catch (e) {
      Alert.alert('Oops', e.message);
    }
    //
  }
  const onBackPress = () => {

    navigation.navigate('SignIn')
  }
  const onResendPress = async () => {
    try {
      await Auth.resendSignUp(username)
      Alert.alert('Sucesso', 'Código reenviado, verifique a sua caixa de Spam do Email!');
    }
    catch (e) {
      Alert.alert('Oops', e.message);
    }
    //console.warn("onResendPress");
  }
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirmar Email</Text>

        <CustomInput name="username" control={control} placeholder="Nome de Usuario" rules={{
          required: 'Nome de Usuario Obrigatorio!'
        }} />

        <CustomInput name="code" control={control} placeholder="Codigo de confirmação" rules={{
          required: 'Codigo de Verificação Obrigatorio!'
        }} />


        <CustomButton text="Confirmar" onPress={handleSubmit(onConfirmPressed)} />
        <CustomButton text="Reenviar Codigo" onPress={onResendPress} type="TERTIARY" />
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
export default ConfirmEmailScreen;