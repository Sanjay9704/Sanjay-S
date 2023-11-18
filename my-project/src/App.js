import React from 'react';
import BasicForm from './Day-2/BasicForm.jsx';

function App() {
  return(
    <div>
      <BasicForm/>
    </div>
  );
}

export default App;

/*import  "./App.css";
import React from 'react';
import MaterialButton from './Day-4/MaterialButton';
function App() {
  return (
    <div>
      <h1>React Material-UI Login Example</h1>
      <MaterialButton />
    </div>
  );
}
export default App;*/

/*import React from 'react';
import FruitSurvey from "./Day-4/FruitSurvey";
function App() {
  return (
    <div>
      <h1>Student Greeting Form</h1>
      <FruitSurvey />
    </div>
  );
}
export default App;

/*import React from 'react';
import GokuTransformation from "./Day-3/GokuTransformation";
function App() {
  return (
    <div>
      <GokuTransformation />
    </div>
  );
}

export default App;

/*import React from 'react';
import ToggleMessage from "./Day-3/ToggleMessage";
function App() {
  return (
    <div>
      <h1>Toggle Message Example</h1>
      <ToggleMessage />
    </div>
  );
}
export default App;

/*import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
      </div>
  );
}
export default App;
/*import  "./App.css";
import InlineStyle from "./Day-2/InlineStyle";
function App(){
  return(
    <div>
      <Style/>
    </div>
  );
}
export default App;
/*import HelloWorld from "./Day-2/HelloWorld";
function App(){
  return(
    <div>
      <HelloWorld/>

    </div>
  );
}
export default App;
/*import { useState } from "react";
import Cart from "./CoffeeShop/Cart";
import Menu from "./CoffeeShop/Menu";
import Navbar from "./CoffeeShop/Navbar";
import categories from "./CoffeeShop/products";
function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [products, setProducts] = useState([]);
  const handleClick = (index) => {
    setActiveCategory(categories[index]);
  };
  const handleAddToCart = (item) => {
    setProducts([...products, item]);
  };
 return (
    <div className="space-y-4 my-4">
      <Navbar category={categories} handleClick={handleClick} />
      <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
      <Cart products={products} />
    </div>
  );
}
export default App;
//import Counter from "./Day-3/Counter";
//function App() {
  //return (
    //<div className="flex space-x-4 my-4">
       //<Counter />
    //</div>
  //);
//
//};
*/