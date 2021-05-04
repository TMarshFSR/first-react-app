import PropTypes from 'prop-types';

const Person = (props) => {
    console.log('PROPS = ', props);
    return (
        <div>
            <h3>{props.name}</h3>
            <p>Occupation: {props.occupation}</p>
            <p>Hobby: {props.hobby}</p>
        </div>
    );
}

export default Person;

Person.propTypes = {
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    hobby: PropTypes.string.isRequired
}