import React, {
    useEffect,
    useState,
    Fragment,
} from 'react';
import { getOrder } from '../Libraries/utils';
import {
    useParams,
} from "react-router-dom";


//Custom Components
import ProductCard from '../CustomComponents/ProductCard'
import OrderSummary from '../CustomComponents/OrderSummary';
import NoOrder from '../Pages/NoOrder';

export default function Order() {

    const [products, setProducts] = useState(undefined);
    const [order, setOrder] = useState(undefined);
    let { id } = useParams();



    useEffect(() => {
        getOrder()
            .then(response => {
                let order = response.filter(r => r.id === parseInt(id));
                setProducts(order[0].orders);
                setOrder(order[0]);
            });
    }, [])

    return (
        <Fragment>

            {order ? (
                <div>
                    <h1>Order Details</h1>
                    <OrderSummary order={order} />
                    {products.map(p => (
                        <ProductCard
                            key={p.id}
                            product={p.product}
                            quantity={p.quantity}
                            orderId={p.id}
                        />
                    ))
                    }
                </div>
            ) : (
                <NoOrder />
            )}
        </Fragment>
    )
}