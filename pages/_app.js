import theme from '../theme/theme'
import Fonts from '../components/fonts'
import { ChakraProvider } from '@chakra-ui/provider'
import MainLayout from '../components/main_layout'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <MainLayout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router}/>
                </AnimatePresence>
            </MainLayout>
        </ChakraProvider>
    )
}

export default MyApp
