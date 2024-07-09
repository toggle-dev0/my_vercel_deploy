import React from 'react'
import "./RegularButton.css"

const RegularButton = (props) => {
  return (
    <div className="RegularButton">
        <button className={props.name}>
            <span>
                {props.children}
            </span>
        </button>
        </div>
  )
}

export default RegularButton