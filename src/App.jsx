import { useState } from 'react'
import Accordion from "./components/Accordion.jsx";
import Search from "./components/Search.jsx";
import DropDown from "./components/DropDown.jsx";
import Translate from "./components/Translate.jsx";
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
const options=[
  {
    label:'Green',
    value:'green'
  },
  {
    label:'Blue',
    value:'blue'
  },
  {
    label:'Red',
    value:'red'
  }];

function App() {
  const [count, setCount] = useState(0)
  const [selected,setSelected] = useState(options[0]);

  return <div>
    <br/>
    <Translate/>
  </div>
}
export default App
