import { useState } from "react";
import { useMemo, useRef } from "react";
import PlansFilter from "./PlansFilter";


const FilterMyPlans = () => {

  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const inputRef = useRef();




    const handleText = (e) => {
        setText(e.target.value)
    }  

    const handleSearch = () => {
        setSearch(text);
    }

    const filteredPlans = useMemo(() => PlansFilter.filter((PlansFilter) => {
        console.log("FILTERING");
        return PlansFilter.item.toLowerCase().includes(search.toLowerCase());
        }), [search])


    return(
        <div className="container">
             <p className="plan">My plans today is {text}</p>
            <input className="myPlan" ref={inputRef} type="text" onChange={handleText}  value={text}/>
        <button className="changeColor" type="button" onClick={handleSearch}>Search</button>
        <div>
            {filteredPlans.map((filteredPlan) => (
                <div className="container">
                    <p className="planning" key={filteredPlans.id}>{filteredPlan.item}</p>
                    <img className="photoPlan" key={filteredPlans.id} src={filteredPlan.image} alt="myPlan" width="350px"/>
                </div>
            ))}
        </div>
        </div>
    )
}

export default FilterMyPlans; 