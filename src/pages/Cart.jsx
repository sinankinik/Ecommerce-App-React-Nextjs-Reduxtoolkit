import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../redux/cardSlice';
import { useNavigate } from 'react-router-dom';
import CartComp from '../components/cart/CartComp';

const Cart = () => {
    const dispatch = useDispatch();
    const { carts, itemCount, totalAmount } = useSelector(state => state.carts);
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])
    return (
        <div>
            {
                carts?.length > 0 ?
                    <div>
                        {
                            carts.map((cart,index)=>(
                                <CartComp key={index} cart={cart}/>
                            ))
                        }
                        <div className='flex justify-end align-center border rounded-md text-2xl font-bold mb-5'>Toplam Tutar: <span>{totalAmount}</span></div>
                    </div> :
                    <div>
                        Kart Boş
                    </div>
            }
        </div>
    )
}

export default Cart