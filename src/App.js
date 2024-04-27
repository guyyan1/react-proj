
import Tile from './components/tile';
import './index.css';
import { useState } from 'react';
import { motion } from 'framer-motion'
import useWindowDimensions from './hooks/useWindowDimentions';



function App() {
  const showEmplyees = true;
  const { height, width } = useWindowDimensions();
  const tileSize = 50;
  const [tiles, setTiles] = useState( 
      Array(
      Math.floor(height/tileSize))
      .fill()
      .map(() => Array(Math.floor(width/tileSize))
      .fill(<Tile></Tile>))    
  )
  return (
    <div className="App">
      {showEmplyees ? (
        <>
          <div>
              array rows: {tiles.length} ~ array cols: {tiles[1].length}
          </div>
          <div>
              width: {width} ~ height: {height}
          </div>
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
