//Trabajo Enrique Paillavil G68
import { useContext } from 'react';
import CardPizza from '../components/CardPizza';
import Header from '../components/Header';
import { Cart } from '../pages/Cart';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';

function Home() {
  const { pizzas, loading, error } = useContext(ProductContext);
  


  return (
    <>
      <Header />
      <h1>Desafío 06</h1>
      <div>
        {loading && <p>Loading...</p>}
        {error && !loading && <p>{error}</p>}
        {!loading && !error && pizzas.length === 0 && <p>No hay pizzas</p>}
        {!loading &&
          !error &&
          pizzas.length > 0 && (
            <div className="cards">
              {pizzas.map((pizza, index) => (
                <CardPizza pizzaId={pizza.id} key={pizza.id} />
              ))}
            </div>
          )}
      </div>
    </>
  );
}

export default Home;
