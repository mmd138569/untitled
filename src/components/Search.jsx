import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Search=()=>{
    const [Term,setTerm]=useState('')
    const[Result,setResult]=useState([])
    const [DebouncedTerm,setDebouncedTerm]=useState(Term)

    useEffect(()=>{
        const TimeoutId = setTimeout(() => {
            if (Term) {
                setDebouncedTerm(Term)
            }
        }, 1000)
        return () => {
            clearTimeout(TimeoutId);
        }
    },[Term])
    useEffect(() => {
        const search = async () => {
            const {data}= await axios.get("https://en.wikipedia.org/w/api.php",{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:DebouncedTerm,
                },
            });
            setResult(data.query.search);
        };
        if(DebouncedTerm) {
            search();
        }
    }, [DebouncedTerm]);

    const RenderResult=Result.map((result)=>{
        return <div key={result.pageid} className={"item"}>
            <div className={"right floated content"}>
                <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>
               <button className="ui inverted secondary button">
                   Go
                </button>
                </a>
            </div>
            <div className={"content"}>
                <div className={"header"}>
                    {result.title}
                </div>
                <div dangerouslySetInnerHTML={{__html: result.snippet}}></div>
            </div>
        </div>
    })
   return <div>
       <div className="ui form">
           <div className="field">
               <label> Search:</label>
               <div className="ui icon input">
                   <input
                       value={Term}
                       onChange={(e)=>setTerm(e.target.value)}
                       type="text" placeholder="Search..."/>
                   <i className="search icon"></i>
               </div>
           </div>
       </div>
       <div className={"ui celled list"}>
           {RenderResult}
       </div>
   </div>
}
export default Search;