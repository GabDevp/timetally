/* eslint-disable prettier/prettier */
import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors } from 'core/constants'

export const Spinners = () => {
  return (
    <View>
      <ActivityIndicator size="large" color={colors.primary} style={{alignSelf: 'center'}} />
    </View>
  )
}
