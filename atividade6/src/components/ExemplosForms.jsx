import { useState } from 'react'; 

function Exemplo() { 
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  }

  return ( 
    <form onSubmit={handleSubmit}>
        <label>Nome:
            <input 
                type="text" 
                name="nome" 
                value={inputs.nome || ""} 
                onChange={handleChange}
            />
        </label>
        <label>Matrícula:
            <input 
                type="number" 
                name="matricula" 
                value={inputs.matricula || ""} 
                onChange={handleChange}
            />
        </label>
        <input type="submit" />
    </form>
  )
}

export default Exemplo