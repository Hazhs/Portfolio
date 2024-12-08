import Modal from 'react-modal'
import PropTypes from 'prop-types'
import Tag from '../Components/Tags'

Modal.setAppElement('#root')

export default function ModalProject ({ isOpen, onClose, dataId }) {
	ModalProject.propTypes = {
		isOpen : PropTypes.bool.isRequired,
		onClose : PropTypes.func.isRequired,
		dataId: PropTypes.shape({
			title : PropTypes.string.isRequired,
			projectImg : PropTypes.string.isRequired,
			projectUrl : PropTypes.string.isRequired,
			description : PropTypes.string.isRequired,
			difficulties : PropTypes.string.isRequired,
			tags : PropTypes.arrayOf(PropTypes.string).isRequired,
		}).isRequired,
	};
  return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel="Description du projet et difficultés rencontrés avec lien vers repo"
			className="modal-content"
			overlayClassName="modal-overlay"
		>
			<button className="close-modal" onClick={(e) => {
				e.stopPropagation();
				onClose();
  		}}>
				X
				</button>
			<h3>{dataId?.title}</h3>
			<h4>Description</h4>
			<p>{dataId?.description}</p>
			<h4>Difficultés rencontrées</h4>
			<p>{dataId?.difficulties}</p>
			<Tag ToTag={dataId}/>
			<a href={`${dataId?.projectUrl}`} target="_blank" className='modal-link'>
				Code / Site Web
			</a>
		</Modal>
	)
}