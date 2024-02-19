import './MyForm.css'
const MyForm = () => {
  return (
    <div>
        <form action="">
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="" placeholder='digite seu nome.'/>
                <input type="submit" value="enviar" />
            </div>
        </form>
    </div>
  )
}

export default MyForm