import logo from './logo.svg';
import './App.css';
import MainComponent from "./components/main";
import {createTheme, ThemeProvider} from "@mui/material";


import Barlow from './assets/fonts/fontMain.woff2';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Barlow Condensed, sans-serif'
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
                    @font-face {
                      font-family: 'Barlow Condensed';
                      font-style: normal;
                      font-display: swap;
                      font-weight: 400;
                      src: local('Barlow Condensed'), local('Barlow Condensed'), url(${Barlow}) format('woff2');
                      unicodeRange:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                    }
                  `,
            },
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <MainComponent/>
            </ThemeProvider>
        </>
    );
}

export default App;
