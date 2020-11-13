/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { WP } from "./PixelPerfect"

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  // Example colors:
  white: '#ffffff',
  text: '#212529',
  primary: '#E14032',
  success: '#28a745',
  error: '#dc3545',
  appColor: '#EFB143',
  black: "black",
  backgroundColor: '#F4F4F5',
  containerBorder: '#E7E7EA',
  pickerBorder: '#A4A9AD',
  secondaryColor: '#DA696B',
  coursesColor: '#5DB257'
}

/**
 * FontSize
 */
export const FontSize = {
  small: WP('3'),
  regular: WP('4'),
  large: WP('4'),
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
}
