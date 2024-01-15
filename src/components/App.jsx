import React, { useState } from "react"
import Display from "./Display"
import Panel from "./Panel"
import operations from "../logic/operations"
import "./App.css"

export default function App() {
  const [state, setState] = useState({
    total: null,
    siguiente: null,
    operador: null,
  })

  const handleClick = (nameButton) => {
    const newState = operations(state, nameButton)
    setState((prevState) => ({ ...prevState, ...newState }))
  }

  return (
    <div className="calculator">
      <div className="circles">
        <div className="circle">
          <span className="red box"></span>
        </div>
        <div className="circle">
          <span className="yellow box"></span>
        </div>
        <div className="circle">
          <span className="green box"></span>
        </div>
      </div>

      <div className="content">
        <Display value={state.siguiente || state.total || "0"} />
        <Panel clickHandle={handleClick} />
      </div>
    </div>
  )
}