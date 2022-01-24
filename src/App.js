import './App.css';
import image from './images/fuku.jpg'
function App() {
  return (
    <div className="App">
      <h2>My Name is Fuku.Here is my beautiful image...</h2>
      <img className="img-home" src={image} alt="Fuku pic" />
    </div>
  );
}

export default App;
