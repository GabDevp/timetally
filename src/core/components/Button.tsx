/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../constants'

interface ButtonProps {
    onPress: () => void
    title: string
}

export const Button = ({ onPress, title }: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress} >
            <Text style={styles.txt} >{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})