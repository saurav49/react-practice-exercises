import React from "react";

const Practice = ({}) => {
  const obj = [
    {
      id: 1,
      name: "book1"
    },
    {
      id: 2,
      name: "book2"
    },
    {
      id: 3,
      name: "book3"
    }
  ];
  const handleOnclick = (e) => {
    console.log(e.target.innerText);
  };

  const handleListRender = (item) => {
    console.log(item);
  };
  return (
    <div>
      <button onClick={handleOnclick}> Hello There </button>
      {obj.map((item) => {
        return (
          <ul key={item.id}>
            <li onClick={() => handleListRender(item)}> {item.name} </li>
          </ul>
        );
      })}
    </div>
  );
};

export { Practice };
