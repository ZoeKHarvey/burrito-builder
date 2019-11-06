import React, { Component } from 'react';
import { getOrders } from '../../apiCalls';
import './Orders.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOrders } from '../../actions';

export class Orders extends Component {

  componentDidMount() {
    const {setOrders} = this.props
    getOrders()
      .then(data => setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
  }

  orderEls = () => {
    console.log('props--->', this.props)
    const { orders } = this.props
     orders.map(order => {
    return (
      <div className="order">
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map(ingredient => {
            return <li>{ingredient}</li>
          })}
        </ul>
      </div>
    )
  });
}

  render() {
  return (
    <section>
      {/* { this.orderEls() } */}
      { this.orderEls.length ? this.orderEls : <p>No orders yet!</p> }
    </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
