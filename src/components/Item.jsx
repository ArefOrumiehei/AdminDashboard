import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Item = (props) => {
    return (
        <Link to={props.url} className='listItem'>
                {props.icon}
                <span className='listItemTitle'>{props.title}</span>
        </Link>
    );
};

Item.propTypes = {
    url : PropTypes.string,
    icon : PropTypes.element,
    title : PropTypes.string
}

export default Item;