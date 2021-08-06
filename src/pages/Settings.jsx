import React from 'react';
import { connect } from 'react-redux';
import { func, shape, number, string } from 'prop-types';
// import { connect } from 'react-redux';
import { fetchCategories } from '../redux/actions';

// import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import { PAGE } from './pages';
// import './PAGE.css';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      difficulty: '',
      type: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    const { categoriesFetch } = this.props;
    categoriesFetch();
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onClickHandler() {
    
  }

  render() {
    const { category, difficulty, type } = this.state;
    const { categories } = this.props;
    return (
      <>
        <h1 data-testid="settings-title">Settings</h1>
        <form action="">
          <label htmlFor="category-select">
            Category
            <select
              name="category"
              id="category-select"
              value={ category }
              onChange={ this.onChangeHandler }
            >
              {categories.map(({ id, name }) => (
                <option key={ id } value={ id }>{name}</option>
              ))}
            </select>
          </label>
          <label htmlFor="difficulty-select">
            Difficulty
            <select
              name="difficulty"
              id="difficulty-select"
              value={ difficulty }
              onChange={ this.onChangeHandler }
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
          <label htmlFor="type-select">
            Type
            <select
              name="type"
              id="type-select"
              value={ type }
              onChange={ this.onChangeHandler }
            >
              <option value="multiple">Multiple</option>
              <option value="boolean">Boolean</option>
            </select>
          </label>
          <input type="button" value="Save" onClick={ this.onClickHandler } />
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  categoriesFetch: () => dispatch(fetchCategories()),
});

const mapStateToProps = (state) => ({
  categories: state.game.categories,
});

Settings.propTypes = {
  categoriesFetch: func.isRequired,
  categories: shape({
    id: number,
    name: string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
