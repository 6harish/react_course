import './App.css';
import Card from './Card';

function App() {
  return (
    <div>
      <div className="App"> Harish Seervi</div>
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
