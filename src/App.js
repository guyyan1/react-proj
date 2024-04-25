
import Tile from './components/tile';
import './index.css';
import { useState } from 'react';
import { motion } from 'framer-motion'
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
          <motion.div 
              className="flex flex-wrap"
              animate={{ x: 100 , y: 100 }} 
              >
                <Tile img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"></Tile>
          </motion.div>
        </>)
        :
          (<p>can't show right now</p>)
      }
    </div>
  );
}

export default App;
