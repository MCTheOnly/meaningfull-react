import React, { Suspense } from 'react'
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import './App.css'

import Box from './components/Box'

function App() {
  return (
    <div className="App">
      <Canvas className='webgl'>
        <OrbitControls />
        <ambientLight intensity={1} color={'#FFFFFF'} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box></Box>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
