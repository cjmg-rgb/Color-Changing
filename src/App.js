import { useState } from "react";
import Box from "./components/Box";
import ColorName from "./components/ColorName";

function App() {

  const [text, setText] = useState('Empty Value');

  return (
    <div className="App">
      <Box 
        text={text}
      />
      <ColorName
        setText={setText}
      />
    </div>
  );
}

export default App;
