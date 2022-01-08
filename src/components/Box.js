import React from 'react'
import { View } from 'react-native'
//import { colors } from '../utils'
//import { useTheme } from '../modules/theming'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Box = (props) => {
	const insets = useSafeAreaInsets()
	//const { colors } = useTheme()
	const { 
		pA,
		pY, 
		pX, 
		pL, 
		pR, 
		pT, 
		pB,
		bR,
		bTLR,
		bTRR,
		bBLR,
		bBRR,
		bW,
		bBW,
		bBWC,
		bC,
		mT,
		mL,
		mR,
		mB,
		flex,
		align,
		jc,
		overflow,
		minWidth,
		height,
		width,
		shadow = false,
		insetsTop,
		insetsBottom,
		bg = 'transparent',
		direction = 'column',
		style
	} = props

	const getAlign = () => {
		switch(align) {
			case 'start': return 'flex-start'
			case 'end': return 'flex-end'
			case 'center': return 'center'
		}
	}

	const getJc = () => {
		switch(jc) {
			case 'start': return 'flex-start'
			case 'end': return 'flex-end'
			case 'center': return 'center'
			case 'between': return 'space-between'
		}
	}

	const getBg = () => {
		switch(bg) {
			case 'white': return '#fff'//colors.bgWhite
			case 'red': return '#ED6E69'
			// case 'yellow': return colors.colorYellow
			// case 'purple': return colors.colorPurple
			// case 'green': return colors.colorGreen
			// case 'gray': return colors.colorGray
			// case 'mediumgray': return colors.bgGray
			// case 'blue': return colors.colorSecondary
			case 'black': return '#272428'
			// case 'medium': return 'rgba(140, 140, 140, 0.5)'
			// case "opacred": return 'rgba(239,74,75, 0.2)'
			// case "footer": return '#272428'
			// case 'night': return '#000'
			// case 'limited': return colors.colorLimited
			// case "purewhite": return "#fff"
			// case 'light': return colors.bgLight
			// case 'transparent': return 'transparent'
			default: return 'transparent'
		}
	}

	return (
		<View style={[
			insetsTop && { paddingTop: insets.top },
			insetsBottom && { paddingBottom: insets.bottom },
			pA && { padding: pA },
			pY && { paddingVertical: pY },
			pX && { paddingHorizontal: pX },
			pL && { paddingLeft: pL },
			pR && { paddingRight: pR },
			pT && { paddingTop: pT },
			pB && { paddingBottom: pB },
			mT && { marginTop: mT },
			mB && { marginBottom: mB },
			mR && { marginRight: mR },
			mL && { marginLeft: mL },
			bR && { borderRadius: bR },
			overflow && { overflow },
			bTLR && { borderTopLeftRadius: bTLR },
			bTRR && { borderTopRightRadius: bTRR },
			bBLR && { borderBottomLeftRadius: bBLR },
			bBRR && { borderBottomRightRadius: bBRR },
			bW && { borderWidth: bW },
			bBW && { borderBottomWidth: bBW },
			bBWC && { borderBottomColor: bBWC },
			bC && { borderColor: bC },
			height && { height },
			width && { width },
			minWidth && { minWidth: minWidth },
			flex && { flex },
			align && {
				alignItems: getAlign()
			},
			jc && {
				justifyContent: getJc()
			},
			{ backgroundColor: getBg(), flexDirection: direction },
			shadow && {
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 0,
				},
				shadowOpacity: 0.25,
				shadowRadius: 1.84,
				elevation: 2,
			},
			style && style
		]}>
			{props.children}
		</View>
	)
}

export default Box