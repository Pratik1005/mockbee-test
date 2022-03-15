import "./App.css";
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
    })()
  }, [])
  return (
    <div className="App">
      <h1>Mockbee Test</h1>
      {products.map(item => (
        <div key={item.id}>
          <h1>{item.id}</h1>
        <h2>{item.title}</h2>
        <h3>{item.author}</h3>
        <h4>{item.price}</h4>
        </div>
        
      ))}
    </div>
  );
}

export default App;
