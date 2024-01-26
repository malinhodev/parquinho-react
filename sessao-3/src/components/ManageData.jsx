import { useState } from "react"

const ManageData = () => {
    const [number,setNumber] = useState(13)
  return (
    <div>
        <div>
            <p> Valor: {number}</p>
            <button onClick={()=> setNumber(22)}>mudar o state</button>
        </div>
    </div>
  )
}

export default ManageData