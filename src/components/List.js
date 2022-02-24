const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <div
            className='incomplete'
            key={item}
            onClick={() => (item.className = 'complete')}
          >
            <li>{item}</li>
          </div>
        );
      })}
    </ul>
  );
};

export default List;
