import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#80CBC4'
    },
    error: {
      main: '#FF5252'
    },
    background: {
      default: '#272C34',
      paper: '#212121'
    }
  },
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(',')
  }
})
