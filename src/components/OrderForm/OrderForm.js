import React, { Component } from 'react';
import { setOrders } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postNewOrder } from '../../apiCalls'

export class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  };

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleIngredientChange = e => {
    e.preventDefault();
    this.setState({ingredients: [...this.state.ingredients, e.target.name]});
  }

  handleSubmit = e => {
    console.log('props in order form', this.props)
    const { setOrders } = this.props
    e.preventDefault();
    let order = {name: this.state.name, ingredients: this.state.ingredients}
    let ordersArray = this.props.orders
    let newOrdersArray = ordersArray.push(order)
    postNewOrder(order)
      .then(setOrders(ordersArray))
    this.clearInputs();
  }


  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>
          {this.state.ingredients.length === 0 && <button disabled>Submit Order</button>}
          {this.state.ingredients.length > 0 && <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>}
      </form>
    )
  }
}

export const mapStateToProps = ({ orders }) => ({
  orders
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setOrders,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)