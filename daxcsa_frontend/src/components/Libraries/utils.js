import ApiUrls from "./ApiUrls";


export async function getOrder() {
    try {
        let response = await fetch(ApiUrls.ordersURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

        let json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteOrder(id) {
    try {
        let response = await fetch(ApiUrls.ordersURL + id + '/', {
            method: 'DELETE',
        });

        let json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteOrderProduct(id) {
    try {
        let response = await fetch(ApiUrls.orderProductURL + id + '/', {
            method: 'DELETE',
        });

        let json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}