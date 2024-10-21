import React, { useState } from "react";
/*function toDoItems(props) {
  return <li>{props.text}</li>;
}
*/

function toDoItems(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}
export default toDoItems;
