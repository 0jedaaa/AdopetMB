import React from 'react';
import { StyleSheet, Text, View, Pressable,TouchableOpacity } from 'react-native';


export default function CustomButton({ onPress, text, type = "PRIMARY", bgColor, fgColor }) {
    return (
        <>
        <TouchableOpacity onPress={onPress} style={[styles.container, styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
        ]}>
            <Text style={[styles.text, styles[`text_${type}`],
             fgColor ? {color: fgColor } : {},
            ]}>{text}</Text>
        </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        marginVertical: 5,

    },
    container_PRIMARY: {
        margin: 30,
        backgroundColor: '#1D00A8',
        width: '80%',
    },

    container_TERTIARY: {
    borderBottomWidth: 1,

    },

    text: {
        fontWeight: 'bold',
        color: "#fff",
    },

    text_TERTIARY: {
        color: '#000',
        
    },
});
