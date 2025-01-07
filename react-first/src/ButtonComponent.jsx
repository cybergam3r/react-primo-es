import PropTypes from 'prop-types';

function ButtonComponent(props) {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  );
}

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonComponent;