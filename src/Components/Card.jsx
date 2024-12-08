import PropTypes from 'prop-types';
import { useState } from 'react'
import ModalProject from './Modal.jsx'

export default function Card ({ cardElement }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	Card.propTypes = {
		cardElement: PropTypes.shape({
			title : PropTypes.string.isRequired,
			projectImg : PropTypes.string.isRequired
		}).isRequired,
	};

	const backgroundImg = {
		backgroundImage : `url(/assets/Images/${cardElement.projectImg})`
	}

	return (
		<div
		className='card'
		style={backgroundImg}
		onClick={() => openModal(cardElement)}>
			<div className='card-info'>
				<p>{cardElement.title}</p>
			</div>
			<ModalProject 
				isOpen={isModalOpen}
				onClose={closeModal}
				dataId={cardElement}/>
		</div>
	)}