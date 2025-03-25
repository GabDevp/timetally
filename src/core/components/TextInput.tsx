/* eslint-disable prettier/prettier */
import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

interface TextInputProps {
    value: string
    onChange: (value: string) => void
}

export const Input = ({ value, onChange }: TextInputProps) => {
    return (
        <TextInput style={styles.input} onChangeText={onChange} value={value} ></TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})