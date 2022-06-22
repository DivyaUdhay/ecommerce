import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Cartitem from "./Cartitem";
import { useState } from "react";
function App() {
  const products=[
    {
      id : 1,
      title : 'Samsung',
      price : 30000
    },
    {
      id : 2,
      title : 'iPhone',
      price : 30000
    },
    {
      id : 3,
      title : 'OnePlus',
      price : 70000
    },
    {
      id : 4,
      title : 'MI',
      price : 20000
    },
    {
      id : 5,
      title : 'Motorola',
      price : 30000
    },
    {
      id : 6,
      title : 'Nokia',
      price : 30000
    },
  
  ]

  const [cartitems,setCartItems] = useState([]);
  const [total,setTotal] = useState(0);
  
  let handleAddToCart = (id) => {
  const productIndex = products.findIndex(obj => obj.id === id)
  const product = products[productIndex]
  product.inCart =true
  setCartItems([...cartitems,product])
  setTotal(total + product.price)
  };

  let handleRemoveCart = (id) => {
    const cartItemIndex = cartitems.findIndex(obj => obj.id ===id)
    setTotal(total - cartitems[cartItemIndex].price)
    cartitems.splice(cartItemIndex,1)
    setCartItems([...cartitems])
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
        <div className="row">
          <div className="col-lg-12">
            <h3>Product</h3>
          </div>
        </div>
      
        <div className="row">
            {
              products.map((product)=>{
                return <Card cartitems={cartitems} data={product} handleAddToCart={handleAddToCart}/>
              })
            }
          </div>
        </div>
        
        <div className="col-lg-4">
        <div className="row">
            <div className="col-lg-12">
            <h3>Cart</h3>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-12">
              <ol className="list-group list-group-numbered">
                {
                  cartitems.map((item) => {
                    return <Cartitem data={item}
                     handleRemoveCart={handleRemoveCart}
                    />
                  })
                }
              </ol>
              </div>
              <div className="col-lg-12">
              <h1>Total: {total}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
