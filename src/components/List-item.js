const ListItems = ({ item, toDos, setToDos }) => {
  const updateComplete = (itemToUpdate) => {
    const updatedItem = toDos.map((item) => {
      if (item.item === itemToUpdate) {
        return { ...item, complete: !item.complete };
      } else {
        return item;
      }
    });
    setToDos(updatedItem);
  };
  return (
    <li>
      {item.item}
      <input type='checkbox' onClick={() => updateComplete(item.item)} />
    </li>
  );
};

export default ListItems;
