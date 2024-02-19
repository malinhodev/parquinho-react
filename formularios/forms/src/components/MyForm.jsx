import './MyForm.css'
const MyForm = () => {
  return (
    <div>
        <form action="">
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="" placeholder='digite seu nome.'/>
                <label htmlFor="">
                    <span>E-mail:</span>
                    <input type="email" name="email" id="" placeholder='digite seu email.'/>
                </label>
                <input type="submit" value="enviar" />
            </div>
        </form>
    </div>
  )
}

export default MyForm