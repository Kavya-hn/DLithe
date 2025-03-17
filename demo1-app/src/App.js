import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<MyForm />);
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
        placeholder='Enter your name:'

      />
      </label>
      <label>
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
          placeholder='Enter your age:'
        />
        </label>
        <input type="submit" />
    </form>
  )
}


export default MyForm;
