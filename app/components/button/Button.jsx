import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'
import { metrics } from '../../theme/metrics'
import Text from '../text/Text'

const Button = ({ title, onPress, customStyles, theme }) => {
  return (
    <TouchableOpacity style={[styles.button, customStyles, theme === 'active' ? {backgroundColor: colors.red} : {backgroundColor:  colors.black}]} onPress={onPress}>
      <Text preset="body" customStyles={{color: colors.white}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: metrics.spacing.m,
    borderWidth: 1,
    // borderBottomColor: colors.green,
    alignSelf: "flex-start",
    borderRadius: metrics.spacing.xxl
  },
})

export default Button;
