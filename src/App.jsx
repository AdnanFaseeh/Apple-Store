import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { Environment,  ScrollControls } from '@react-three/drei'
import Maccontainer from './Maccontainer'
import { FaMagnifyingGlass,FaApple } from "react-icons/fa6";




const App = () => {
  return (
    <div className='w-full h-screen '>
      <div className='navbar flex gap-10 py-[15px] items-center absolute top-0 left-1/2 -translate-x-1/2'>
       {[ <FaApple className='text-[20px]' />
,"Store","Mac","iPad","iPhone","Wacth","Vision","Airpods","Tv&Home","Support",<FaMagnifyingGlass />

].map((e) => 
         <a href='#' className='text-white font-[400] text-sm'>{e}</a>)}
      </div>
      <div className='absolute flex flex-col items-center text-white top-20 left-1/2 -translate-x-1/2'>
      <h3 className='masked text-7xl tracking-tighter font-[700]'>macbook pro.</h3>
      <h5>Oh so Pro.</h5>
      <p className='text-center w-3/4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, neque exercitationem, dolorum laborum .</p>
      </div>
    <Canvas camera={{fov: 12, position:[0, -10, 220]}}>
      <Environment files={['./studio_small_09_4k.exr']} />
      <ScrollControls pages={3}>
      <Maccontainer />
      </ScrollControls>
    </Canvas>
    </div>
  )
}

export default App