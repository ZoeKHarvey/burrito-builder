import { orders} from './orders';	
import { shallow } from 'enzyme'
import { OrderForm, mapStateToProps, mapDispatchToProps } from './OrderForm';
import { setOrders } from '../../actions/index';


	describe('orders', () => {
	it('should return the initial state', () => {
	const expected = [];
	const result = orders(undefined, {});
	expect(result).toEqual(expected);
  });
  
})