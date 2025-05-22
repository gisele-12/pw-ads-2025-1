import { createTheme } from '@mui/material/styles'
import { yellow, pink } from '@mui/material/colors' // aqui importa as cores do tema

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: yellow[500]
    },
    secondary: {
      main: pink[500]
    } // aqui sao configurados as cores primarias e secundarias
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold'
    }
  }
})

export default theme