import './App.css';
import Break from './components/Break';
import Session from './components/Session';
import CountdownTimer from './components/CountdownTimer';

function App() {
  return (
    <div className="App">
      <h1>Study Timer</h1>
      <div className="setters">
        <Break />
        <Session />
      </div>
      <CountdownTimer />
      <p>Designed and Coded by</p>
      <p>horvana</p>
    </div>
  );
}

export default App;
