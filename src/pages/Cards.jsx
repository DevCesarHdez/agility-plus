import {useEffect, useState} from "react";
import Layout from "../components/Layout";
import Card from "../components/Card/Card";
import character from "../infrastructure/repository/Character";


const Cards = () => {
	const [characters, setCharacters] = useState([])
	const fetchCharacter = async () => {
		const results = await character()
		setCharacters(results.results)
	}

	useEffect(() => {
		fetchCharacter()
	}, [])
	
	return <Layout>
		{
		characters.map(character => <Card key={character.id} name={character.name} initialStatus={character.status} species={character.species} imgAvatar={character.image} />)
		}
	</Layout>
}

export default Cards