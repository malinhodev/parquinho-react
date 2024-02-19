import { useState } from 'react'
import './MyForm.css'
const MyForm = () => {
    const [name,setName] = useState()
    const [email,setEmail] = useState()

    const handleName = (e)=>{
        setName(e.target.value)
    }

    

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log('enviando formulário')
        console.log(name,email)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="" placeholder='digite seu nome.' onChange={handleName}/>
                <label htmlFor="">
                    <span>E-mail:</span>
                    <input type="email" name="email" id="" placeholder='digite seu email.' onChange={(e)=> setEmail(e.target.value)}/>
                </label>
                <input type="submit" value="enviar" />
            </div>
        </form>
    </div>
  )
}

export default MyForm