/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'
import { FontSize } from './Variables'

export default StyleSheet.create({
  textSmall: {
    fontSize: FontSize.small,
  },
  textRegular: {
    fontSize: FontSize.regular,
  },
  textLarge: {
    fontSize: FontSize.large,
  },
  titleSmall: {
    fontSize: FontSize.small * 2,
    fontFamily: 'Assistant-Bold',
  },
  titleRegular: {
    fontSize: FontSize.regular * 2,
    fontFamily: 'Assistant-Bold',
  },
  titleLarge: {
    fontSize: FontSize.large,
    fontFamily: 'Assistant-Bold',
  },
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
})
