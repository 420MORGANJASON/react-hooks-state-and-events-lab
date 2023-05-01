import React, { useState } from "react";
import React from "react";

function Item({ item }) {
  const [inCart, setInCart] = useState(false);

  function handleClick() {
    setInCart(prevState => !prevState);
  }

  const cartText = inCart ? "Remove From Cart" : "Add to Cart";
  const cartClass = inCart ? "in-cart" : "";

  return (
    <li className={cartClass}>
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <button onClick={handleClick}>{cartText}</button>
    </li>
  );
}

export default Item;










// import React from "react";

// function Item({ name, category }) {
//   return (
//     <li className="">
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add">Add to Cart</button>
//     </li>
//   );
// }

// export default Item;
