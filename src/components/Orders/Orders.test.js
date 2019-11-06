import React from 'react';	
	import { shallow } from 'enzyme'
	import { Orders, mapStateToProps, mapDispatchToProps } from './Orders';
  import { getOrders } from '../../apiCalls'
  
  jest.mock('../../apiCalls');
  
	describe('Orders', () => {
    let wrapper;
    let orders; 
    // const getOrders = jest.fn()

	  beforeEach(() => {
    orders = [{ name: 'me', ingredients: ['cheese']}];
	  wrapper = shallow(<Orders getOrders={getOrders} orders={orders} />)
    });
  
	  it('should match the snapshot', () => {
	    expect(wrapper).toMatchSnapshot();
    });
    
    it('should get existing orders after mounting', () => {
      expect(getOrders).toHaveBeenCalled()
      });
  });
  
  describe('mapStateToProps', () => {
    it('should return an object with', () => {
      let orders;
      const mockState = {
      orders
      };
      const expected = {
      orders
      };

      orders = [{ name: 'me', ingredients: ['cheese']}]

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)
    });
    })
   