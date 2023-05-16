import React, { useCallback, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Todo.css";
import { baseUrl } from "../baseUrl";

const Todo = () => {
  const [todolist, setTodoList] = useState([]);
  const [inputTxt, setInputTxt] = useState("");

  // api function
  async function allTask() {
    await fetch(`${baseUrl}/api/all-task`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setTodoList(res.data);
      });
  }
  async function addTask() {
    if (inputTxt === "") {
      alert("Fill the task field");
    } else {
      await fetch(`${baseUrl}/api/insert-task`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: inputTxt,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setTodoList(res.data);
        });
    }
    setInputTxt("");
  }

  // delete api function
  async function deleteTask(id) {
    await fetch(`${baseUrl}/api/delete-task`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setTodoList(res.data);
      });
  }
  // handle complete task funciton
  async function completeTaskhandler(id) {
    const item = todolist.find((element) => element.id == id);
    if (item.completed == 1) {
      return;
    } else {
      await fetch(`${baseUrl}/api/complete`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setTodoList(res.data);
        });
    }
  }
  // inpute handler Function to handle inpute
  const inputHandler = (event) => {
    setInputTxt(event.target.value);
  };
  // enter key handler
  const enterKeyHandle = (event) => {
    if (event.key === "Enter") {
      // Call your function or perform any other action
      addTask();
    }
  };
  // useEffect
  useEffect(() => {
    allTask();
  }, []);
  //api function
  return (
    <div className="background-container">
      
      <div className="profile-image-div">
        <img src="./images/avatar2.png" alt="profile-pic"></img>
      </div>

      {/* input header div */}
      <div className="input-container">
        <button className="btn-icon">
          <i className="material-icons custom-icon">menu</i>
        </button>
        <input
          type="text"
          className="input-field"
          value={inputTxt}
          placeholder="Todo today"
          onKeyDown={enterKeyHandle}
          onChange={inputHandler}
        />
        <div className="arrow-container">
          <button className="btn-icon" onClick={addTask}>
            <i className="material-icons arrow-icon">keyboard_arrow_down</i>
          </button>
        </div>
      </div>
      <br />

      {/*  */}
      <div className="task-main-container">

        {todolist.map((item, index) => (
          <div className="task-container" key={index}>
            <input
              type="checkbox"
              className="check-inpute"
              readOnly
              checked={item.completed === 1}
              onClick={() => completeTaskhandler(item.id)}
            />
            <input
              type="text"
              disabled={true}
              className="input-field"
              value={item.task ? item.task : "error"}
            />
            <div className="arrow-container">
              <button className="btn-icon" onClick={() => deleteTask(item.id)}>
                <i className="material-icons arrow-icon">
                  <span className="material-symbols-outlined">
                    drag_indicator
                  </span>
                </i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
