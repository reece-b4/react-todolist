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
  return (
    <>
      <Form setToDos={setToDos} />
      <ul>
        {toDos.map((item, index) => {
          return (
            <ListItems
              key={index}
              item={item}
              toDos={toDos}
              setToDos={setToDos}
            />
          );
        })}
      </ul>
    </>
  );
};

export default List;
