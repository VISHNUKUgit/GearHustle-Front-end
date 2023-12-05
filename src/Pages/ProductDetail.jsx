import React from 'react';
import Product from '../Components/Product';
import { useLocation } from 'react-router-dom';

function ProductDetail(props) {
  const location = useLocation();
  const ad = location.state.data

  return (
    <div>
      <Product ad={ad}/>
    </div>
  );
}

export default ProductDetail;
