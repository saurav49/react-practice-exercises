import React, { useState } from "react";
import { ToggleThemeBtn } from "../DarkMode/DarkMode";

const Edit = ({ index, handleEditTodo, todos, setTodos }) => {
  let todo;

  const handleTodo = (e) => {
    todo = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    todos[index] = { todo: todo, isDone: false };
    console.log(typeof todos[index], todos);
    setTodos([...todo, todos[index]]);
  };

  // console.log("IN THE EDITING TAB");

  return (
    <form onSubmit={handleSubmit}>
      {console.log("IN THE EDITING TAB")}
      <input type={todo} onChange={handleTodo} />
      <div onClick={handleEditTodo}>Done Editing</div>
    </form>
  );
};

const MyTodo = ({ backgroundColor, color }) => {
  const btnStyle = {
    margin: "0.5em 1em",
    padding: "0.5em 1em",
    outline: "none",
    boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.5)",
    border: "none",
    fontWeight: "bold",
    fontSize: "0.92em",
    borderRadius: "0.5em",
    backgroundColor: backgroundColor === "#fff" ? "#333" : "#fff",
    color: color === "#fff" ? "#333" : "#fff",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    cursor: "pointer"
  };

  let todo;
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const addTodo = (e) => {
    todo = e.target.value;
  };

  const handleCompleteTask = (index) => {
    todos[index].isDone = !todos[index].isDone;
    setTodos([...todos]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { todo: todo, isDone: false }]);
    e.target[0].value = "";
  };

  const calculateCompletedTodo = () => {
    let completedTodo = todos.filter((t) => t.isDone);
    return completedTodo.length;
  };

  const handleDeleteTodo = (index) => {
    todos[index].isDone
      ? setTodos(todos.filter((todo, indexT) => indexT !== index))
      : alert("make sure you complete the todo before deleting it");
  };

  const handleEditTodo = (index) => {
    console.log("IN THE EDIT");
    setIsEdit(!isEdit);
  };

  return (
    <>
      <h2> Total : {todos.length} </h2>
      <h2> Todo : {todos.length - calculateCompletedTodo()}</h2>
      <h2> Completed : {calculateCompletedTodo()} </h2>
      <form onSubmit={handleSubmit}>
        <input
          style={{ padding: "0.5em 1em" }}
          type="text"
          value={todo}
          onChange={(e) => addTodo(e)}
        />

        <button style={btnStyle} type="submit">
          ADD
        </button>
      </form>
      <div
        style={
          todos.length > 0
            ? {
                border: "1px solid #eee",
                padding: "1em",
                borderRadius: "0.6em",
                margin: "1em"
              }
            : {}
        }
      >
        {todos.map((t, index) => {
          return (
            <>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly"
                }}
                key={index}
              >
                <li
                  style={
                    t.isDone
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                  onClick={() => handleCompleteTask(index)}
                >
                  {t.todo}
                </li>
                <button
                  onClick={() => handleDeleteTodo(index)}
                  style={btnStyle}
                >
                  Delete
                </button>
                <button onClick={() => handleEditTodo(index)} style={btnStyle}>
                  EDIT
                </button>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};

const Todo = () => {
  const [bgColor, setBgColor] = useState("#fff");

  const updateColor = () => {
    return bgColor === "#fff" ? "#333" : "#fff";
  };

  return (
    <div
      style={{ backgroundColor: bgColor, color: updateColor(), padding: "1em" }}
    >
      <MyTodo backgroundColor={bgColor} color={updateColor()} />
      <ToggleThemeBtn bgColor={bgColor} setBgColor={setBgColor} />
    </div>
  );
};

export { Todo };

/* <Edit
   key={index}
   index={index}
   isEdit={isEdit}
   setIsEdit={setIsEdit}
   handleEditTodo={handleEditTodo}
   todos={todos}
   setTodos={setTodos}
/> */
