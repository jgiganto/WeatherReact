import React from 'react';
import PropTypes from 'prop-types';
// const Location = (props) => //Without Destructuring
// {
//   const city = props.city;
//   return(<div><h1>{city}</h1></div>);
// };



const Location = ({city}) => //Destructuring
(
  <div>
    <h1>
      {city}
    </h1>
  </div>
);

Location.propTypes = {
  city: PropTypes.string.isRequired,
};
export default Location;
