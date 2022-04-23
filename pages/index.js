import PageLayout from '../components/page_layout'
import { Container } from '@chakra-ui/react'	

const Page = () => {
    return (
        <PageLayout>
			<Container>
				<p>Hello there, this is page layout (from index.js)</p>
			</Container>
		</PageLayout>
    )
}

export default Page