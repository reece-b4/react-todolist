import './App.css';
import { useState } from 'react';
import Header from './components/Header'

function App() {
  const [toDo, setList] = useState('make to do list');
  const [input, setInput] = useState('');
  console.log(input)
  return (
    <div className='App'>
      <Header />
      <div>
        <input placeholder="to do" value={input} onInput={e => setInput(e.target.value)}></input>
        <button
          onClick={(input) =>
            setList((currList) => {
              // console.log(currList);
              return [currList, input];
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
