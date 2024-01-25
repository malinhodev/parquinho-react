const operation = ()=>{
    const a = 1
    const b = 2

    const math = function(){
         const result = a + b
        console.log(result)
    }


    return(
        <div>
            <p>{a} + {b}</p>
            <button onClick={math}>somar agora</button>
        </div>
    )
}

export default operation