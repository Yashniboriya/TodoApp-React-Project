import React, { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import TextSnippetRoundedIcon from "@mui/icons-material/TextSnippetRounded";

function App() {
  const [todos, setTodos] = useState([
    "Todo App With Firebase",
    "Firebase Curd Operations",
  ]);
  const [text, setText] = useState("");

  //Add
  const Add = (e) => {
    e.preventDefault();
    setTodos([...todos, text]);
    setText("");
  };
  //Update
  const Update = (i) => {
    const modifyTodo = prompt("Enter New Todo 🆕", todos[i]);
    if (modifyTodo) {
      todos[i] = modifyTodo;
      setTodos([...todos]);
    } else {
      alert("Update is Cancelled ❌");
    }
  };
  //Delete
  const Delete = (i) => {
    const updatedTodos = todos.slice();
    updatedTodos.splice(i, 1);
    setTodos(updatedTodos);
  };

  //Delete All
  const DeleteAll = () => {
    if (DeleteAll) {
      alert("You Sure You Want to Delete All Todos ?");
      setTodos([]);
    } else {
      alert("Delete All Operations is Cancelled ❌");
    }
  };
  return (
    <div>
      <h1 className="Todo__Header">
        TODO APP &nbsp;
        <TextSnippetRoundedIcon />
      </h1>

      <form>
        <Paper elevation={5} className="Add__Todo">
          <TextField
            className="Text__Filled"
            label="Enter Todo's"
            variant="standard"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <div className="buttonContainer">
            <Button
              type="submit"
              variant="text"
              disabled={!text}
              color="primary"
              onClick={Add}
              className="buttonWithIcon"
            >
              ADD &nbsp;
              <AddBoxOutlinedIcon />
            </Button>
            <Button
              type="delete"
              variant="text"
              color="primary"
              onClick={DeleteAll}
              className="buttonWithIcon"
            >
              DELETE ALL &nbsp;
              <DeleteOutlineOutlinedIcon />
            </Button>
          </div>
        </Paper>
      </form>

      {todos.map((data, i) => {
        return (
          <Paper elevation={4} className="Todo_Rendering">
            <p>
              {i + 1}. &nbsp;&nbsp;{data}
            </p>
            <div>
              <Button variant="text" color="primary" onClick={() => Update(i)}>
                Update &nbsp;
                <UpdateOutlinedIcon />
              </Button>
              <Button variant="text" color="primary" onClick={() => Delete(i)}>
                Delete &nbsp;
                <DeleteOutlineOutlinedIcon />
              </Button>
            </div>
          </Paper>
        );
      })}
    </div>
  );
}

export default App;
