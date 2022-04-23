import Head from 'next/head'
import { Box } from '@chakra-ui/react'

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
        <Box>This is main layout</Box>
        {children}
        </Box>
    )
}

export default MainLayout
