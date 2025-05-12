import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductPoller() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const randomId = Math.floor(Math.random() * 100) + 1;
      try {
        const response = await axios.get(`https://dummyjson.com/products/${randomId}`);
        const data = response.data;
        setProduct(data);
        console.log("Тауар:", data);
      } catch (err) {
        console.error("Қате орын алды:", err);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => {
      clearInterval(interval);
      console.log("Компонент тоқтатылды");
    };
  }, []);

  return (
    <div className='div border'>
      <h2 className='hh'>Product Poller</h2>
      {product ? (
        <div>
          <h3 className='hhh'>{product.title}</h3>
          <p className='pp'>{product.description}</p>
          <p className='pp'>Бағасы: ${product.price}</p>
          <img className='img' src={product.images[0]} alt="smth" />
        </div>
      ) : (
        <p>Жүктелуде...</p>
      )}
    </div>
  );
}
