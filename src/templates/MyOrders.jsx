import React from 'react';
import 'Styles/MyOrders.scss';
import MyOrdersItem from 'Componentes/MyOrdersItem';

const MyOrders = () => {
  return (
    <div className="MyOrders">
      <div className="MyOrders-container">
        <h1 className="title">My orders</h1>

        <div className="MyOrders-content">
          
          <MyOrdersItem />
          
        </div>
      </div>
    </div>
  );
}

export default MyOrders;