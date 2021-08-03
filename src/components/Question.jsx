import React from 'react';
// import PropTypes from 'prop-types';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Question</p>
      </div>
    );
  }
}

// COMPONENT.propTypes = {
//   var: PropTypes.type.isRequired,
//   arr: PropTypes.arrayOf(PropTypes.number).isRequired,

//   obj: PropTypes.shape({
//     var: PropTypes.type.isRequired,
//     }).isRequired,

//   optionalUnion: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ]).isRequired,
// };
