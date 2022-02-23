import './App.css';
import image_one from './img1.jpeg';
import image_two from './img2.jpeg';
import { GroceryList } from './GroceryList'

function App() {
  return(
    <div className="App">
      <div className="center">
        <img src= {image_one} height="200px" alt="shopping bag" />
      </div>
      <div className="center">
        <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <div className="center">
        <img src= {image_two} height="200px" alt="shopping man" />
      </div>
    </div>
  )
}

export default App;
