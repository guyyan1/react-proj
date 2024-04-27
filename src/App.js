
import Tile from './components/tile';
import './index.css';
import { useState } from 'react';
import { motion } from 'framer-motion'
import useWindowDimensions from './hooks/useWindowDimentions';
import Canvas from './components/Canvas';


function App() {
  const { height, width } = useWindowDimensions();
  function draw(context, count){
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.fillStyle = 'grey';
      const delta = count % Math.floor(width/2);
      context.fillRect(0 + delta, 0, 100, height);
  }

  function draw2(context, count){
    // context.clearRect((width - 100), 0, context.canvas.width, context.canvas.height);
    // context.fillStyle = 'grey';
    // const delta = count % Math.floor(width/2);
    // context.fillRect((width - 100) - delta, 0, 100, height);
    // context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    // context.fillStyle = 'grey'
    // const d = count % 100
    // context.fillRect(10 +d , 10  , 10 , 10)
  }

  return (
    <div>
      <Canvas draw={draw} width={Math.floor(width/2)} height={height} style={{border: "1px solid black"}}></Canvas>
      <Canvas draw={draw2} width={Math.floor(width/2)} height={height} style={{border: "1px solid black"}}></Canvas>
    </div>
  );
}

export default App;
