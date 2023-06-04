import './App.css';
import Speech from './Speech';
function App() {
  return (
    <div className="App App-wraptop">
      <div className="App-wrapleft">
        <img src="https://m.media-amazon.com/images/I/51u8ZRDCVoL.jpg" alt="bookimage" />
      </div>
      <div className="App-wrapright">
        <Speech />
      </div>
    </div>
  );
}
export default App;
