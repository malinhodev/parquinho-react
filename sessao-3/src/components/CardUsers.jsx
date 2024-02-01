
const CardUsers = ({name,old,job}) => {
  return (
    <div>
      <h2>detalhes do usuário</h2>
      <ul>        
        <li >Nome: {name}</li>
        <li >Idade: {old}</li>
        <li >Profissão: {job}</li>
        {old >= 18 && <li>Pode tirar CNH!</li>}
      </ul>
    
    </div>
  )
}

export default CardUsers