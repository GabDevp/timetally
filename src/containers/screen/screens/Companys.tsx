/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Companys = () => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={[styles.container, {paddingTop: top}]}>
        <Text>Companys</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
})