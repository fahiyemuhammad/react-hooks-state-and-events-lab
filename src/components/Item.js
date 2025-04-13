import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart,setIsInCart] = useState (false);

   function handleAdd(){
      setIsInCart((prev)=> !prev)
   }
   
  const itemClass = isInCart? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAdd}className="add">
        {isInCart? "Remove from Cart":"Add to Cart"}
        </button>
    </li>
  );
}

export default Item;
