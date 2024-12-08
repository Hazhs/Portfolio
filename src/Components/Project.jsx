import Card from './Card.jsx'
import data from '../data.json'
import '../Styles/project.scss'

export default function ProjectGallery () {
    const dataCards = data.map((data) => (
		<Card key={data.id} cardElement={data}/>
	))

	return (
			<div className="gallery">
				{dataCards}
			</div>
	)
}

