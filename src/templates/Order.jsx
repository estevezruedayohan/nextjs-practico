import React from 'react';
import 'Styles/Order.scss';
import OrderItem from 'Componentes/OrderItem';

const Order = () => {
  return (
    <div className="Order">
      <div className="Order-container">
        <h1 className="title">My order</h1>
        <div className="Order-content">
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
          <OrderItem />
      </div>
    </div>
  );
}

export default Order;