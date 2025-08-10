import Navshow from './Navshow';
import './Navitems.css';
export default function Navitems() {
    const navbar = [
        { id: 1, label: "HTML", link: "https://www.w3schools.com/html/default.asp" },
        { id: 2, label: "CSS", link: "https://www.w3schools.com/css/default.asp" },
        { id: 3, label: "JAVA", link: "https://www.w3schools.com/java/default.asp" },
        { id: 4, label: "JAVASCRIPT", link: "https://www.w3schools.com/js/default.asp" },
        { id: 5, label: "SQL", link: "https://www.w3schools.com/sql/default.asp" },
        { id: 6, label: "REACT", link: "https://www..com/react/default.asp" }];
        let nav = 
        navbar.map(val=>{
            return(<Navshow label={val.label} link={val.link}/>)});

    return (
        <>
        <navbar className='d-flex bg-black text-light'>{nav}</navbar>                              
        </>

    )
}

