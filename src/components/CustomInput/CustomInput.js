import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

function CustomInput({ control, name, rules = {}, placeholder, secureTextEntry }) {
  return (

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange, onBlur }, fieldState: {error}}) =>
        <>
        <View style={[styles.root,{borderColor: error ? 'red' : '#e8e8e8' }]}>
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
          />
             </View>
            {error && (
            <Text style={{color: 'red', alignSelf: 'auto'}}>{error.message || 'Erro'}</Text>
            )}
             </>
          }
      />

 
  );
}
const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
    width: '90%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {},

});
export default CustomInput;