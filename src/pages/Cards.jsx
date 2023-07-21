import Layout from "../components/Layout"
import Card from "../components/Card/Card"

const Cards = () => {
	return <Layout>
		<Card name="Cesar" initialStatus="Alive" species="Humman" imgAvatar="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
		<Card name="Cesar" initialStatus="Dead" species="Humman" imgAvatar="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
		<Card name="Cesar" initialStatus="unknown" species="Humman" imgAvatar="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
	</Layout>
}

export default Cards