import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [toDo, setList] = useState([
    'make to do list',
    'buy milk',
    'post letter',
    'learn react',
  ]);
  // const [input, setInput] = useState('');
  console.log(toDo);
  return (
    <div className='App'>
      <Header />
      <div>
        <input placeholder='to do'></input>
        <button
        // onClick={() =>
        //   setList((currList) => {
        //     // console.log(currList);
        //     return [currList];
        //   })
        // }
        >
          Add to todo list
        </button>
      </div>
      <List list={toDo} />
    </div>
  );
}

export default App;
