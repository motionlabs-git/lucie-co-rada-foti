import React from 'react'

function HamburgerIcon() {
    return (
        <div className='flex flex-col justify-center gap-2 w-14 aspect-square h-fit border border-black/50 rounded-lg p-2 cursor-pointer backdrop-blur-xs'>
            <div className='w-full h-[3px] rounded-full bg-black'> </div>
            <div className='w-full h-[3px] rounded-full bg-black'> </div>
            <div className='w-full h-[3px] rounded-full bg-black'> </div>
        </div>
    )
}

export default HamburgerIcon