import PropTypes from 'prop-types';
import Tags from './Tags.jsx'

export default function Card ({ cardElement }) {

	Card.propTypes = {
		cardElement: PropTypes.shape({
			title : PropTypes.string.isRequired,
			projectImg : PropTypes.string.isRequired,
			projectUrl : PropTypes.string.isRequired,
			tags : PropTypes.arrayOf(PropTypes.string).isRequired,
		}).isRequired,
	};

	const backgroundImg = {
		backgroundImage : `url(/assets/Images/${cardElement.projectImg})`
	}

	return (
		<a
		href={`${cardElement.projectUrl}`}
		target="_blank"
		className="card"
		style={backgroundImg}>
			<div className='card-info'>
				<p>{cardElement.title}</p>
				<Tags ToTag={cardElement}/>
			</div>
		</a>
	)}