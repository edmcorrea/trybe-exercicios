import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render () {
    const { name, type, averageWeight, image } = this.props;
    return (
      <div className='card'>
        <div>
          <h4> {name} </h4>
          <p> {type} </p>
          <p> Average Weight: {averageWeight.value} {averageWeight.measurementUnit} </p>
        </div>
        <img src={image} alt={name}></img>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  }),
  image: PropTypes.string.isRequired,
}

export default Pokemon;