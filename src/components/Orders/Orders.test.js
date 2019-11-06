import React from 'react';	
	import { shallow } from 'enzyme'
	import { Orders, mapStateToProps, mapDispatchToProps } from './Orders';
	import { } from '../../actions/index'
  jest.mock('../../apiCalls');
  
	describe('Orders', () => {
	  let wrapper;
	  beforeEach(() => {
	  wrapper = shallow(<Orders />)
    });
  
	  it('should match the snapshot', () => {
	    expect(wrapper).toMatchSnapshot();
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
   