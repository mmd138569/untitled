import react, {useEffect, useState,useRef} from 'react';


const DropDown = ({options,selected,OnSelectedChange,label}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    useEffect(() => {
        document.body.addEventListener('click', () => {
            if(ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        },{capture: true});
    }, []);
    const RenderOptions=options.map((option) =>{
        if(option.value===selected.value){
            return null;
        }
       return <div key={option.value} className="item"
                   onClick={()=>OnSelectedChange(option)}>
           {option.label}
        </div>
    })
    return <div>
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={()=>setOpen(!open)} className={`ui selection dropdown ${open?'visible active':''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text"> {selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' :''}`}>
                        {RenderOptions}
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default DropDown;