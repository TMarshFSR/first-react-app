import PropTypes from 'prop-types';

const ComponentWithProps = (props) => {

    return (
        <div>
            <h1>Header: {props.header}</h1>
            <p>Content: {props.content}</p>
            <p>Number: {props.number}</p>
            <p>nonexistent: {props.nonexistent}</p>
        </div>
    );
}

ComponentWithProps.propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    nonexistent: PropTypes.string,
}



export default ComponentWithProps;