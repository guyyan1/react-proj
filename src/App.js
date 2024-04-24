import Employee from './components/Employee';
import './index.css';
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
          <div className="flex flex-wrap">
              <Employee name="Guy" role="CEO" img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"/>
              <Employee name="Ron" role="Developer"/>
              <Employee name="Yuval" role={role}/>
              <Employee name="Rami"/>
          </div>
        </>)
        :
          (<p>can't show right now</p>)
      }
    </div>
  );
}

export default App;
