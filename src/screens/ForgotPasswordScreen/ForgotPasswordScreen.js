import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Logo from '../../../assets/images/foto.png';
import Backg from '../../../assets/images/background-dog.png'
import Patinha1 from '../../../assets/images/patinhas1.png';
import Patinha2 from '../../../assets/images/patinhas2.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';
function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();


  const onConfirmPressed = () => {
    navigation.navigate('NewPassword')
  }
  const onBackPress = () => {
  
    navigation.navigate('SignUp')
  }
  const onResendPress = () => {
    console.warn("onResendPress");
  }
  return (
    <ScrollView>
      <View style={styles.root}>
       <Text style={styles.title}>Resetar Senha</Text>

        <CustomInput placeholder="E-mail" value={email} setValue={setEmail} />


        <CustomButton text="Enviar" onPress={onConfirmPressed} />
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
  title:{
      fontSize: 24,
      fontWeight: 'bold',
      margin: 30,
  },
});
export default ForgotPasswordScreen;