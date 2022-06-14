import { useEffect, useState } from 'react';
import './App.css';


const App = () => {
  const [newExcuse, setExcuse] = useState([]);
  const [error, setError] = useState (null);

useEffect(()=>{
  const fetchData = async ()=>{
    try {
      const response = await fetch
      ('https://excuser.herokuapp.com/v1/excuse/office/3');
      console.log (response)
      if(!response.ok){
        throw new Error(response.statusText)
      }
      const data = await response.json();
      setExcuse(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setError('Could not fetch the data');
    }
  };
  fetchData();
},[])

return (
<div className="App">
<div>
<h1>Excuses API</h1>
{error && <p>{error}</p>}
{newExcuse.map ((excuse)=>(
<div key={excuse.id}>
  <h3>{excuse.excuse}</h3>

    </div>

))}
</div>
</div>
);
};
export default App;