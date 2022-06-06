import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View,StyleSheet, TextInput} from 'react-native';

 function CustomInput({value, setValue, placeholder, secureTextEntry}) {
  return (
    <View style={styles.root}>
        <TextInput 
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        />
        
    </View>
  );
}
const styles = StyleSheet.create({
 root:{
   padding: 10,
    backgroundColor: 'white',
    width: '90%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical:10,
 },
 input:{},

});
export default CustomInput;