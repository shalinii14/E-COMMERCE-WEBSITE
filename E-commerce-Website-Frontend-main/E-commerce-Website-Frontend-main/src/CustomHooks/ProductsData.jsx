import React , {useState, useEffect} from 'react'

const ProductsData = (id) => {
    const [ProductData, setProductData] = useState(null);
    
    let productData = async () => {
        let data = await fetch(`https://dummyjson.com/products/${id}`);
        let response = await data.json();
        setProductData(response);
    };
    
    useEffect(() => {
        productData();
    }, []);

    return ProductData
}

export default ProductsData
