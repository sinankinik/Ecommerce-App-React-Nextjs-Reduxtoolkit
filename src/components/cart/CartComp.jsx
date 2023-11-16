import React from 'react'
import { removeFromCart } from '../../redux/cardSlice'
import { useDispatch } from 'react-redux';

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  console.log(cart)
  return (
    <div className='m-5 flex items-center justify-left border rounded-md'>
      <img className='w-[150px] h-[150px] object-cover' src={cart.image} alt="item image" />
      <div className='m-2 flex items-center'>
        <div className='m-2 w-[300px]'>{cart?.title}</div>
        <div className=' w-[100px]'>{cart?.quantity}</div>
        <div className=' w-[100px]'>{cart?.price} TL</div>
        <div className=' w-[100px]'>{cart?.totalPrice} TL</div>
        <div className=' bg-blue-400 text-white
         w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center' onClick={()=> dispatch(removeFromCart(cart?.id))}>Ürünü Sil</div>
      </div>
    </div>
  )
}

export default CartComp