export default function Navshow({link,label}){
    return(
        <div>
            <a href={link}>
            {label}
            </a>
        </div>
    )
}