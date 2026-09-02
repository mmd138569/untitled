import { useState } from 'react'
import Accordion from "./components/Accordion.jsx";
import Search from "./components/Search.jsx";

const items=[
  {
    title:'What is the react:',
    content:'React is the Best blah blah blah '
  },
  {
    title:'How can I learn react ?',
    content:'you can learn easily and blah blah '
  }
];
function App() {
  const [count, setCount] = useState(0)

  return <div>
    <br/>
    <Search/>
  </div>
}

export default App
