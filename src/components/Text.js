'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
} from 'react-native';

//import { typography } from '../utils'
import typography from './typography'
//import { withTheme } from '../modules/theming'

function _getFontFamily(font) {
  switch(font) {
    case 'regular':
      return typography.fontRegular
    case 'bold':
      return typography.fontBold
	case 'medium':
	  return typography.fontMedium
    case 'heavy':
	  return typography.fontHeavy
	case 'header':
	  return typography.fontHeader
    default:
      return typography.fontRegular
  }
}

const TextComponent = props => {
  //const { colors } = props.theme
  const {
  	h1,
  	h2,
  	h3,
  	h4,
    h5,
    size,
	align,
	opacity,
	lineHeight,
	letterSpacing,
  	font,
	color = 'black',//colors.textColor,
	textDecorationLine,
  	children
  } = props

  //alert(size)

  return (
  	<Text
      {...props}
  		style={StyleSheet.flatten([
  			styles.text, {
  				textAlign: align,
				color,
				textDecorationLine,
				fontFamily: _getFontFamily(font, h1 || h2),
				//lineHeight: lineHeight
				//lineHeight: 20
				//lin
  				//fontFamily: //_getFontFamily(font)
  			},
			opacity && { opacity },
			lineHeight && { lineHeight },
			letterSpacing && { letterSpacing },
  			h1 && StyleSheet.flatten([{ fontSize: typography.fontSizeH1 }]),
  			h2 && StyleSheet.flatten([{ fontSize: typography.fontSizeH2 }]),
  			h3 && StyleSheet.flatten([{ fontSize: typography.fontSizeH3 }]),
  			h4 && StyleSheet.flatten([{ fontSize: typography.fontSizeH4 }]),
        h5 && StyleSheet.flatten([{ fontSize: typography.fontSizeH5 }]),
        size && StyleSheet.flatten([{ fontSize: size }])
  		])}
  	>
  		{children}
  	</Text>
  )
}

const styles = StyleSheet.create({
	text: {
		
	}
});

TextComponent.propTypes = { 
	align: PropTypes.string,
	font: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.number
};

TextComponent.defaultProps = { 
	align: 'auto',
	font: 'regular',
};

//export default withTheme(TextComponent);
export default TextComponent