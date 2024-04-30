
import './index.css';
import { useState } from 'react';
import { motion } from 'framer-motion'
import useWindowDimensions from './hooks/useWindowDimentions';
import Canvas from './components/Canvas';

function getRandom(minValue, maxValue){
    return Math.floor(Math.random() * (maxValue - minValue) + minValue);
}

function App() {
    const { height, width } = useWindowDimensions();
    const holeSize = 100;
    const wallWidth = 100;
    const holeStartingPoint = getRandom(0, height - holeSize);


  function draw(context, count){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    const delta = count % width;
    // draw blank spaces for bird to pass those rects will have the same delta
    context.fillStyle = 'grey';
    context.fillRect(0 + delta, 0, wallWidth, holeStartingPoint);
    context.fillStyle = 'white';
    context.fillRect(0 + delta, holeStartingPoint, wallWidth, holeSize);
    context.fillStyle = 'grey';
    context.fillRect(0 + delta, holeStartingPoint + holeSize, wallWidth, height-(holeStartingPoint + holeSize));
  
  }


  return (
    <div className="flex">
        <Canvas draw={draw} width={width} height={height} ></Canvas>
    </div>
  );
}

export default App;
