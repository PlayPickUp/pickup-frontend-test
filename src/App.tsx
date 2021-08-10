import React from "react";
import "./App.css";

// Create a Button component that matches the style of the PickUp Button, it should be re-usable and allow for prop driven customization
// You can view the button here: https://drive.google.com/file/d/1PrU3J_-1Vo_Bfao9ZZ55xzxOGyROsw6C/view?usp=sharing
// The gradient for the purple background is:  `linear-gradient(112.25deg, rgb(145, 78, 255) -20.38%, rgb(93, 27, 255) 122.56%)`

// Also include a secondary variant of the button that matches this design: https://drive.google.com/file/d/1qUhs3qttNhsO0nfbK49-jS8iAaQLr2Gk/view?usp=sharing

// Don't worry about using the correct font family, for this example just use "Arial" bold or something similar.

function App() {
  return (
    <div className="App">
      <Button />
    </div>
  );
}

export default App;
