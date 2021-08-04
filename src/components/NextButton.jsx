import React from 'react';

class NextButton extends React.Component {
  render() {
    return (
      <input
        type="button"
        value="Próxima"
        data-testid="btn-next"
      />
    );
  }
}

export default NextButton;
