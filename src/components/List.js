import { useState } from 'react';
import ListItems from './List-item';
import Form from './Form';

const List = () => {
  const [toDos, setToDos] = useState([
    { item: 'make to do list', complete: false },
    { item: 'buy milk', complete: false },
    { item: 'post letter', complete: false },
    { item: 'learn react', complete: false },
  ]);

const [completed, setCompleted] = useState([])

  return (
    <>
      <Form setToDos={setToDos} />
      <ul>
          <p>ToDo</p>
        {toDos.map((item) => {
          return (
            <ListItems
              key={item.item}
              item={item}
              toDos={toDos}
              setToDos={setToDos}
              completed={completed}
              setCompleted={setCompleted}
            />
          );
        })}
      </ul>
      <ul>
          <p>Completed</p>
        {completed.map((completedItem) => {
          return (
            <ListItems
              key={completed.item}
              item={completed}
            />
          );
        })}
      </ul>
    </>
  );
};

export default List;
