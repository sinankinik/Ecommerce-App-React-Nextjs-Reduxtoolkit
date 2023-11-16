import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  return (
    <div className='w-1/6 bg-gray-100 p-4 max-h-screen'>
      <div className='borber-b pb-1 text-xl px-2 font-bold'>Kategoriler</div>
      {
        categories?.map((category, i) => (
          <div onClick={() => setCategory(category)} className='text-l cursor-pointer hover:bg-gray-200 p-2' key={i}>{category}</div>
        ))
      }
    </div>
  )
}

export default Category