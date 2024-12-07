import Card from '../../Components/Card.jsx'
import data from '../../data.json'
import '../../Styles/project.scss'

export default function Project() {
	const dataCards = data.map((data) => (
		<Card key={data.id} cardElement={data} />
	))

	return (
		<main>
			<div className="gallery">
				{dataCards}
			</div>
		</main>
	)
}
  