import { useState } from 'react';
import './App.css';
import ColorBox from './colorbox';

function App() {
  const [color, setColor] = useState('#ff0000');

  return (
    <div className="App">
      <h1>Simple Color Picker</h1>
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
      />
      <ColorBox color={color} />
    </div>
  );
}

export default App;
