import PropTypes from 'prop-types';

export default function Tag({ ToTag }) {

	Tag.propTypes = {
		ToTag: PropTypes.shape({
			tags : PropTypes.arrayOf(PropTypes.string).isRequired
		}).isRequired, 
	};

  const tags = ToTag.tags;
  const tagsDiv = tags.map((tag) => (
    <div key={tag} className="tag">
      {tag}
    </div>
  ))

  return <div className="tagList">{tagsDiv}</div>
}