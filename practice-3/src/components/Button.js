import React from "react"

function Button(props) {
  const number = props.number

  return (
    <div>
      <button onClick={() => alert("You clicked on Button " + number)}>Button {number}</button>
    </div>
  )
}

export default Button
