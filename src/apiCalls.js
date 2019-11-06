export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const postNewOrder = (newOrder) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newOrder),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch('http://localhost:3001/api/v1/orders', options)
  .then(response => response.json())
};

export const deleteOrder = (id) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(`http://localhost:3001/api/v1/orders/${id}`, options)
  .then(response => response.json())
};