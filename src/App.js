import Employee from './components/Employee';
import './App.css';
import { useState } from 'react';
function App() {
  const showEmplyees = true;
  const [role, setRole] = useState('Developer')
  return (
    <div className="App">
      {showEmplyees ? (
        <>
          <input type='text' onChange={(e)=>{
              setRole(e.target.value);
            }}
          />

          <Employee name="Guy" role="CEO"/>
          <Employee name="Ron" role="Developer"/>
          <Employee name="Yuval" role={role}/>
          <Employee name="Rami"/>
        </>)
        :
          (<p>can't show right now</p>)
      }
    </div>
  );
}

export default App;
