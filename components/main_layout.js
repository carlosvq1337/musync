import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from './navbar'

const MainLayout = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>MuSync - Manage your music</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container>{children}</Container>
        </Box>
    )
}

export default MainLayout
