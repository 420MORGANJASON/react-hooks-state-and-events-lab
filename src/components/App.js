
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(prevMode => !prevMode);
  }

  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}


export default App;











// import React from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";
// import React, { useState } from 'react';

// function App() {

//   function handleclick(event) {
//     console.log(event)
//   }
//   useState()

//   // replace 'false' with a state variable that can be toggled between true and false
//   // this will be used for the Dark Mode Toggle feature
//   const appClass = darkMode ? "App dark" : "App light"

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={event => console.log(event)}>Dark Mode</button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;
