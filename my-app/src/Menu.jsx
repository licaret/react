import PropTypes from 'prop-types';

function Menu({ items }) {
	return (
		<ul>
      {items.map(menuItem => <li key={menuItem.id}>{menuItem.name}</li>)}
    </ul>
	);
}

Menu.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object)
};

export default Menu;