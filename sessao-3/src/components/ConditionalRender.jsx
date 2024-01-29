import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(true)
    const [name, setName] = useState("Marlon")
  return (
    <div>
        <h2>exibindo por condicional boolean</h2>
        {x && <p>se x for true</p>}
        {!x && <p>se x for false</p>}
        <h2>if ternario</h2>
        {name === "João" ? (
            <div>
                <p> O nome é João</p>
            </div>
        ) : (
            <div>
                <p>nome não encontrado!</p>
            </div>
        )}
        <button onClick={()=> setName("João")}>mudar o nome para joão</button>
    </div>
  )
}

export default ConditionalRender