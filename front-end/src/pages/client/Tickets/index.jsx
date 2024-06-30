import React from 'react';
import { useSelector } from 'react-redux';

const Tickets = () => {
    const myBasket = useSelector((state) => state.basket);
    console.log(myBasket);

    const handleCheckout = async () => {
        try {
            const basketItems = myBasket.basket.map(item => ({
                tickets: item.tickets,
                hall: item.hall,
                time: item.time,
                movie: item.movie,
                location: item.location,
                price: item.price 
            }));
            console.log(basketItems);

            const response = await fetch('http://localhost:5050/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ products: basketItems }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const session = await response.json();
            console.log(session.url);
            window.location = `${session.url}`;
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <div>
            {
                myBasket.basket.map((item, index) => (
                    <div key={index}>
                        <p>
                            <span>Hall:</span>
                            <span>{item.hall}</span>
                        </p>
                        <p>
                            <span>Location:</span>
                            <span>{item.location}</span>
                        </p>
                        <p>
                            <span>Movie:</span>
                            <span>{item.movie}</span>
                        </p>
                        <p>
                            <span>Session Time:</span>
                            <span>{item.time}</span>
                        </p>
                    </div>
                ))
            }
            <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
    );
};

export default Tickets;
