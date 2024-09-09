import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import PizzaTarjeta from '../components/PizzaTarjeta';

export const Cart = () => {
  const { cart, getTotal } = useContext(CartContext);
  const { pizzas } = useContext(ProductContext); // consumimos el contexto de productos

  // Función para obtener los detalles de las pizzas en el carrito
  const getPizzaDetails = (pizzaId) => {
    return pizzas.find((pizza) => pizza.id === pizzaId);
  };

  return (
    <>
      <h1>Cart - Total: ${getTotal()}</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          cart.map((cartItem) => {
            const pizzaDetails = getPizzaDetails(cartItem.id); // cargamos los detalles en en pizzaDetails

            return (
              <PizzaTarjeta 
                key={cartItem.id} // damos la key al componente PiazzaTarjeta
                pizza={{ ...pizzaDetails, count: cartItem.quantity }} // Pasar detalles de pizza y cantidad
              />
            );
          })
        )}
      </div>
    </>
  );
}