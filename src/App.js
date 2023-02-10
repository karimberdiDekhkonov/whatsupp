import { useState } from 'react';
import './App.css';
import Left from './components/LeftSection/Left';
import Right from './components/RightSection/Right';

function App() {
  const [value, setValue] = useState("123")
  return (
    <div className="all">
      <div className="App row">
      <Left/>
      <Right/>
    </div>
    </div>
  );
}

export default App;
