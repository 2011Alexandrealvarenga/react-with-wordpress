import './App.css';
import Posts from './components/pages/Posts';


function App() {
  return (
    <div className="App">
      <header className="App-header">        
          <Posts/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
