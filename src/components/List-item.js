const ListItems = ({ item, toDos, setToDos, completed, setCompleted }) => {
  
  const updateComplete = (itemToUpdate) => {
    let completedItem = {};
    toDos.forEach((item) => {
      if (item.item === itemToUpdate) {
        completedItem = item
        const findIndex = toDos.findIndex(a=> a.id === completedItem.id)
        findIndex != -1 && toDos.splice(findIndex, 1)
        completed.push(completedItem)
      }
    });
    console.log(completed, toDos)
    setToDos(toDos);
    setCompleted(completed);
  };

  return (
    <li>
      {item.item}
      <input type="checkbox" onClick={() => updateComplete(item.item)} />
    </li>
  );
};

export default ListItems;
