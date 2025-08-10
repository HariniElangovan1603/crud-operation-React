
import './languages.css'
export default function languages({languages}){
    const lan=["Tamil","English","Spanish","Italian","Hindi","Korean","Malayalam","Telugu","Kannada","Marathi","Sanskrit","Gujarati","Urdu","Panjabi","Bengali","Japanese","other languages"];
    return(
        <>
        <h2>Languages
         <div className="language-container">
        {lan.map((la,index)=>(
        
        <button  className="language-button" key={index} onClick={()=>console.log (la)} >
        {la}
          </button>
        ))
        }
        </div>
        </h2>
        </>
    )
}