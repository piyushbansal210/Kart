import { Dimensions,Platform,StatusBar } from 'react-native'


export const Colors = {
    navyBlue: '#223263',
    blue: '#40BFFF',
    lightGrey: '#9098B1',
    lightRed: '#FB7181',
    lightGold: '#FFC833',
    lightBlue: 'rgba(64, 191, 255, 0.1)',
}

export const margin = {
    extraSmall: 2,
    small: 4,
    bigSmall: 6,
    extraMedium: 8,
    medium: 10,
    bigMedium: 12,
    extraLarge: 14,
    large: 16,
    bigLarge: 18
}

export const {
    width,
    height
} = Dimensions.get('screen');


export const marginStatus = Platform.OS === 'ios'?0:StatusBar.currentHeight;