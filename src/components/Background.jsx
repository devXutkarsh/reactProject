import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'></div>
     <div className='absolute top-[5%] capitalize w-full py-10 flex justify-center text-zinc-600 font-semibold text-[2vw]'> document</div>
    <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%] capitalize font-semibold  text-[13vw] leading-none tracking-tighter text-zinc-700'>docs</h1>
    </>
  )
}

export default Background