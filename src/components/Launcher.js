import React, {Fragment,useEffect} from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getitems } from '../actions/itemac'
import Product from './product/Product'

const Launcher = () =>{
  const dispatch = useDispatch();
  const { loading, products, error, productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.products);
  useEffect(() => {
    dispatch(getitems());
  },[dispatch])
    return( 
      <div className="container container-fluid">
        <section id="products" className="container mt-5">
          <div className="row">
            {products && products.map(i => (
              <Product key={i._id} i={i} />
            ))}
          </div>
        </section>
      </div>
)}


export default Launcher;