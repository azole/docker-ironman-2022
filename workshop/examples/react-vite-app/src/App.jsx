import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    { isChecked: false, title: 'item 1' },
    { isChecked: true, title: 'item 2' },
  ]);

  function remove(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  function addItem() {
    if (!value) {
      return;
    }
    const newItems = [...items];
    newItems.push({ title: value, isChecked: false });
    setItems(newItems);
    setValue('');
  }

  function checkItem(index) {
    const newItems = [...items];
    newItems[index].isChecked = !newItems[index].isChecked;
    setItems(newItems);
  }

  const tasks = items.map((item, index) => {
    return (
      <li className={item.isChecked ? 'checked' : ''} key={item.title}>
        <div
          onClick={() => {
            checkItem(index);
          }}
        >
          {item.title}
        </div>
        <span
          className="close"
          onClick={() => {
            remove(index);
          }}
        >
          x
        </span>
      </li>
    );
  });

  return (
    <>
      <div className="header">
        <h2>My To Do List</h2>
        <input
          type="text"
          placeholder="Title..."
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <span
          className="addBtn"
          onClick={() => {
            addItem();
          }}
        >
          Add
        </span>
      </div>
      <ul>{tasks}</ul>
    </>
  );
}

export default App;
