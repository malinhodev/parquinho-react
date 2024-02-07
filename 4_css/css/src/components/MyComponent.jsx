import './MyComponent.css'

const MyComponent = () => {
  return (
    <div>
        {/**sempre stilizar css de componente utilizando 
         * classes para não varzar o css!!!*/}
         
         
        <h1>Título</h1>
        <h2>CSS de componete</h2>
        <p className='component-p'>meu páragrafo</p>
        <p>meu segundo páragrafo</p>
    </div>
  )
}

export default MyComponent