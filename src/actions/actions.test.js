import * as actions from './index';

describe('actions', () => {
  it('should have a type of SET_ORDERS', () => {
    const orders = [{name: 'dog', ingredients: ['pickles', 'hotdogs']}]
    const expectedAction = {
      type: 'SET_ORDERS',
      orders
    };
    const result = actions.setOrders(orders);
    expect(result).toEqual(expectedAction)
  });
});