import {useState} from "react";

const getDropdown = (props) => {
    let onChange = (prop) => {
        props(prop)
    }
    return <div className="bg-red-300 flex flex-col rounded mt-1 p-2 text-sm w-32" id="dropdown">
        <button onClick={() => onChange("Study")} type="button"  className="px-2 py-1 hover:bg-blue-300 rounded">Study</button>
        <button onClick={() => onChange("Work")} type="button"  className="px-2 py-1 hover:bg-blue-300 rounded">Work</button>
        <button onClick={() => onChange("Other")} type="button"  className="px-2 py-1 hover:bg-blue-300 rounded">Other</button>
    </div>;
}

function DropDown  ({setCategory}) {
    const [showResults, setShowResults] = useState(true)
    const [menuSelection, setMenuSelection] = useState("Study")

    let onChange = () => {
        setShowResults(!showResults)
        setCategory("Hello")
    }

   return (
       <div>
           <button type = "button" onClick={() => onChange()}
                   className="bg-red-400 px-4 py-2 rounded" id="menu-btn">{menuSelection}</button>
           {showResults ? getDropdown(setMenuSelection) : null}

       </div>
   )
}

export default DropDown

