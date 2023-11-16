import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cardSlice';

const DetailCom = ({ productDetail }) => {
    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch();

    const decrement = () => {
        if (quantity > 0)
            setQuantity(quantity - 1)
    }
    const increment = () => {
            setQuantity(quantity + 1)
    }

    const addBasket = () => {
        dispatch(addToCart({
            id: productDetail?.id, title: productDetail?.title,
            image: productDetail?.image, price: productDetail?.price,
            quantity: quantity
        }))
    }
    return (
        <div className='flex gap-10'>
            <img src={productDetail.image} className='h-[700px] object-cover' alt="" />
            <div>
                <div className='text-4xl font-bold'>{productDetail.title}</div>
                <div className='my-2 text-xl'>{productDetail.description}</div>
                <div className='my-2 text-xl'>Rating: {productDetail.rating?.rate}</div>
                <div className='my-2 text-xl'>Count: {productDetail.rating?.count}</div>
                <div className='text-3xl font-bold'> {productDetail.price} <span>TL</span></div>
                <div className='text-3xl flex items-center gap-5'>
                    <div onClick={decrement} className='cursor-pointer'>-</div>
                    <input className='w-8 text-center my-4 font-bold' type='text'  value={quantity} readOnly />
                    <div onClick={increment} className='cursor-pointer'>+</div>
                </div>
                <div onClick={addBasket} className='my-4 border rounded-lg bg-blue-300 text-2xl w-[200px] cursor-pointer h-16 flex justify-center items-center'>Sepete Ekle</div>
            </div>
        </div>
    )
}

export default DetailCom