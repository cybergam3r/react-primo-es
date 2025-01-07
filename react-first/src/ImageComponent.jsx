import { Component } from 'react';
import PropTypes from 'prop-types';

class ImageComponent extends Component {
  render() {
    return (
      <img src={this.props.src} alt={this.props.alt} />
    );
  }
}

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  
};

export default ImageComponent;