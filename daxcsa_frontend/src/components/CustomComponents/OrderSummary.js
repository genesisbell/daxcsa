import './orderSummary.css'
import { deleteOrder } from '../Libraries/utils';
import { useNavigate } from 'react-router-dom';

import moment from 'moment';

export default function OrderSummary({ order }) {

    const navigate = useNavigate();

    let total = 0;
    order.orders.forEach(o => {
        total += o.product.price * o.quantity;
    });

    const subtotal = total / 1.16;
    const tax = total - subtotal

    function deleteO() {
        deleteOrder(order.id)
            .then(response => (
                navigate('/')
            ))
    }

    function payOrder() {
        alert('Order payed');
    }

    if (order.orders.length === 0) {
        deleteO();
    }

    return (
        <div id='order_summary'>
            <p>Order number: {order.id}</p>
            <p>Date: {moment(order.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
            <p>Subtotal: $ {subtotal.toFixed(2)}</p>
            <p>Taxes: $ {tax.toFixed(2)}</p>
            <p>Total: $ {total.toFixed(2)}</p>
            <button type='button' className='btn-green' onClick={() => payOrder()}>Pay</button>
            <button type='submit' className='btn-red' onClick={() => deleteO()}>Delete Order</button>
        </div >
    )
}