import React, { useState } from "react";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const changeHandler = (e) => {
    return setActivity(e.target.value);
  };

  const clickHandler = () => {
    return setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
    // Async
    /*     setListData([...listData, activity]);
    console.log(listData); */
  };
  const removeHandler = (index) => {
    const updatedListData = listData.filter((element, id) => {
      return index !== id;
    });
    setListData(updatedListData);
  };
  const removeAll = () => {
    setListData([]);
  };
  return (
    <div>
      <h1> Todo List </h1>
      <input
        type="text"
        placeholder="Input Here"
        value={activity}
        onChange={changeHandler}
      />
      <button onClick={clickHandler} type="submit">
        {" "}
        Add{" "}
      </button>
      <p> Here is your list</p>
      {listData !== [] &&
        listData.map((data, index) => {
          return (
            <>
              <p key={index}>
                <div> {data} </div>
                <button onClick={() => removeHandler(index)}>remove</button>
              </p>
            </>
          );
        })}
      {listData.length > 1 && <button onClick={removeAll}> Remove All </button>}
    </div>
  );
};
export default TodoList;
