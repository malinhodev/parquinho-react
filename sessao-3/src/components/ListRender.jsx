import { useState } from "react"


const ListRender = () => {
    const [list] = useState(['Matheus', 'João', 'Pedro','Maria'])
    //maneira correta
    const[users] = useState([
        {id: 1, name:"Marlon", age:31},
        {id:8431, name: "Vnada", age: 28},
        {id:121545, name:"Maycon", age:19}
    ])
  return (
        //imprimir dados entre parenteses não usar chaves
    <div>
        <ul>
            {list.map((item,i)=>(
                <li key={i}>{item}</li>
            ))}
        </ul>
        <p>Nome e idade</p>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender