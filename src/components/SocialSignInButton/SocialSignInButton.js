import CustomButton from '../CustomButton/CustomButton';
import React from 'react';
export default function SocialSignInButton() {
    const onSignInFacebook = () => {
        console.warn("onSignInFacebook");
      }
      const onSignInGoogle = () => {
        console.warn("onSignInGoogle");
      }
      const onSignInApple = () => {
        console.warn("onSignInApple");
      }
    return (
        <>
            <CustomButton text="Entrar com Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9" />
            <CustomButton text="Entrar com Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4DD4" />
            <CustomButton text="Entrar com Apple" onPress={onSignInApple} bgColor="#E3E3E3" fgColor="#363636" />
        </>
    );
}




