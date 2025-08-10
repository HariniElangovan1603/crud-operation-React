import './Checkbox.css'
export default function Checkbox({ label }) {

    return (
       <div className="Checkbox">
        <input type="checkbox" />{label}
       </div>
        
    )
}