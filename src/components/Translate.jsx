import React,{useState} from 'react'
import DropDown from "./DropDown.jsx";
import Convert from "./Convert.jsx";

const Options = [
    {
        label:'African',
        value:'Af'
    },
    {
        label:'English',
        value:'Eng'
    },
    {
        label:'French',
        value:'Fr'
    },
];
const Translate = () => {
    const [Language, setLanguage] = useState(Options[0]);
    const [Text, setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text Here</label>
                    <input value={Text} onChange={(e)=>setText(e.target.value)}/>
                </div>
            </div>
            <DropDown label="Select The Language" options={Options} selected={Language} OnSelectedChange={setLanguage}/>
            <br/><br/>
            <h2 className="ui header">Output</h2>
            <Convert language={Language} text={Text}/>
        </div>
    )
}
export default Translate;