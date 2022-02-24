import './App.css';
import { useState } from 'react';

function App() {
  const [toDo, setList] = useState('make to do list');
  return (
    <div className='App'>
      <header>To do list</header>
      <div>
        <input></input>
        <button
          onClick={() =>
            setList((currList) => {
              console.log(currList);
              return 'buy milk';
            })
          }
        >
          Add to todo list
        </button>
      </div>
      <ul>
        <li>{toDo}</li>
      </ul>
    </div>
  );
}

export default App;
