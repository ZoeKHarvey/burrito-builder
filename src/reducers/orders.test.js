import { orders} from './orders';	
import { shallow } from 'enzyme'

	describe('orders', () => {
it('should return the initial state', () => {
	const expected = [];
	const result = orders(undefined, {});
	expect(result).toEqual(expected);
  });

it('should output the correct case of SET_ORDERS action type', () => {
	const initialState = [];
	const action = {
	type: 'SET_ORDERS',
	orders: [{name: 'dog', ingredients: ['pickles', 'hotdogs']}]
	};
	const result = [{name: 'dog', ingredients: ['pickles', 'hotdogs']}];
	expect(orders(initialState, action)).toEqual(result)
  });
  
it('should return initial state if action is not SET_ORDERS', () => {
  const initialState = [];
  const action = {
    type: 'WHAT',
    orders: [{name: 'dog', ingredients: ['pickles', 'hotdogs']}]
    };
    expect(orders(initialState, action)).toEqual(initialState)
  })
})
  