import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './../../redux/productSlice';
import { getCategoryProducts } from './../../redux/productSlice';
import Loading from './../Loading';
import Product from './Product';

const Products = ({ category, sort }) => {

  const dispatch = useDispatch();
  const { products, productStatus } = useSelector(state => state.products);

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category))
    } else {
      dispatch(getProducts())
    }
  }, [dispatch, category])

  return (
    <div>
      {
        productStatus === "LOADING" ? <Loading /> :

            <div className='flex flex-wrap justify-center'>
              {
                products.map((product, index) => (
                  <Product key={index} product={product} />
                ))
              }
            </div>

      }
    </div >
  )
}

export default Products