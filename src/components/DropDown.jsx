import react from 'react';

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
const DropDown = () => {
    const RenderOptions=options.map((option) =>{
       return <div key={option.value} className="item">
           {option.label}
        </div>
    })
    return <div>
        <div className="ui form">
            <div className="field">
                <label className="label">Select color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text"> Select Color</div>
                    <div className="menu visible transition">
                        {RenderOptions}
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default DropDown;