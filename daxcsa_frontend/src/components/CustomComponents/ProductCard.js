import './productCard.css'
import { deleteOrderProduct } from '../Libraries/utils';

export default function ProductCard({ quantity, product, orderId }) {



    function deleteProduct() {
        deleteOrderProduct(orderId)
            .then(response => (
                window.location.reload(false)
            ))
    }

    return (
        <div className='product-card'>
            <img
                src={product.iamge}
                alt={product.price}
                width='100px'
                height='100px'
            />
            <div className='product-details'>
                <div>
                    <p>{product.name}</p>
                    <p>{orderId}</p>
                    <p>Cant: {quantity} X ${product.price.toFixed(2)}</p>
                </div>
                <div className='product-price'>
                    <p>${product.price.toFixed(2)}</p>
                    <button type='submit' className='btn-red' onClick={() => deleteProduct()}>Delete Product</button>
                </div>
            </div>
        </div>
    );
}