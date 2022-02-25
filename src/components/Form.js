import { useState } from 'react';
const Form = ({ setToDos }) => {
  const [newItem, setNewItem] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    setToDos((currToDos) => {
      return [{item: newItem, complete: false}, ...currToDos];
    });
    setNewItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='to do'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <button type='submit'>Add to todo list</button>
    </form>
  );
};

export default Form;
