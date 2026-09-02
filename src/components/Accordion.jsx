import React,{useState} from 'react'

const Accordion = ({AccordionItems}) =>{
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitledClick = (index) => {
        setActiveIndex(index);
    }
const RenderItems= AccordionItems.map((item,index)=>{
    const Active = index === activeIndex ? 'active' : '';
    return <React.Fragment key={item.title}>
        <div className={`title ${Active}`}
        onClick={()=>{onTitledClick(index)}}>
            <i className="dropdown icon"></i>
            {item.title}
        </div>
        <div className={`content ${Active}`}>
            <p>{item.content}</p>
        </div>
    </React.Fragment>
});

    return <div className={"ui styled accordion"}>
        {RenderItems},
    </div>;
};
export default Accordion;