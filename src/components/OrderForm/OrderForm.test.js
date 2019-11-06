import React from 'react';	
import { shallow } from 'enzyme'
import { OrderForm, mapStateToProps, mapDispatchToProps } from './OrderForm';
import { setOrders } from '../../actions/index';
  
  jest.mock('../../apiCalls');
  
	describe('OrderForm', () => {
    let wrapper;
    let orders = [{ name: 'me', ingredients: ['cheese']}]

	  beforeEach(() => {
	  wrapper = shallow(<OrderForm orders={orders} />)
    });
  
	  it('should match the snapshot', () => {
	    expect(wrapper).toMatchSnapshot();
	  });
  });
  
  describe('mapDispatchToProps', () => {
    let mockDispatch;

    beforeEach(() => {
    mockDispatch = jest.fn();
    });
    
    it('calls dispatch with a setOrders action', () => {
      const actionToDispatch = setOrders([
      {name: 'dog', ingredients: ['meats', 'cheese']}, 
      {name: 'cat', ingredients: ['grass', 'hair']}
    ])
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setOrders([
      {name: 'dog', ingredients: ['meats', 'cheese']}, 
      {name: 'cat', ingredients: ['grass', 'hair']}
    ]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  })