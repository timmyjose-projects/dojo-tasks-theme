import { extendTheme } from '@chakra-ui/react'

// custom theme
export const colors = {
    // new values
    brand: {
        900: '#024fc9',
        800: '#145af5',
        700: '#2977f2',
        600: '#337df2',
        500: 'green'
    }
}

export const fonts = {
    // update existing values
    body: 'Tahoma',
    heading: 'Courier New'
}

const dojoTasksTheme = extendTheme({ colors, fonts })

export default dojoTasksTheme