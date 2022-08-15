import React from "react";

export default function FilterButton(props) {
    return(
        
            <button className="filter-btn" 
            aria-pressed="true"
            onClick={() => props.setFilter(props.name)}>{/*aria-pressed means that the button is either turned on or off*/}
                
                <span className="filter-label">{props.name} tasks</span>
                
            </button>
     
    )
}