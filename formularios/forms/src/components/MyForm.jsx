import { useState } from 'react'
import './MyForm.css'
const MyForm = ({user}) => {
    const [name,setName] = useState(user ? user.name : '')
    const [email,setEmail] = useState(user ? user.email : "")
    const [bio,setBio] = useState(user ? user.bio : "")
    const [cargo,setCargo] = useState('')

    const handleName = (e)=>{
        setName(e.target.value)
    }

    

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log('enviando formulário')
        console.log(name,email,bio,cargo)
        //clear form 
        setName('')
        setEmail('')
        setBio('')
        setCargo('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="" placeholder='digite seu nome.' onChange={handleName} value={name}/>
                <label htmlFor="">
                    <span>E-mail:</span>
                    <input type="email" name="email" id="" placeholder='digite seu email.' onChange={(e)=> setEmail(e.target.value)} value={email}/>
                </label>
                <label htmlFor="">
                    <span>Bio:</span>
                    <textarea name="bio" onChange={(e)=> setBio(e.target.value)} value={bio} placeholder='digite sua biografia'></textarea>
                </label>
                <label htmlFor="">
                    <span>cargo:</span>
                    <select name="cargo" onChange={(e)=> setCargo(e.target.value)}>
                        <option value="editor">editor</option>
                        <option value="chefe">chefe</option>
                        <option value="fotografo">fotográfo</option>
                    </select>
                </label>
                <input type="submit" value="enviar" />
            </div>
        </form>
    </div>
  )
}

export default MyForm