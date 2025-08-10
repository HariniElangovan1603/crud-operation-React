import './Description.css'
export default function Description({title,title1,para1,para2,para3,para4,para5,para6,para7}){
    return(
        <>
        <div className="Description">
        <h3>{title}</h3>
        <h4>{title1}</h4>
       <ul>
            <li>{para1}</li>
            <li>{para2}</li>
            <li>{para3}</li>
            <li>{para4}</li>
            <li>{para5}</li>
            <li>{para6}</li>
            <li>{para7}</li>
        </ul>
        </div>
        </>
    )
}