import Rings from '@/icons/Rings'
import React from 'react'

function HamburgerIcon() {
    return (
        <div className='flex justify-center items-center gap-2 w-14 aspect-square h-fit border border-gray-700/50 rounded-lg p-2 cursor-pointer backdrop-blur-xs'>
            <div className='relative'>

                <Rings width={34} height={34}></Rings>
                <Rings className='absolute top-0 blur-sm opacity-60' id='navIconSVGBlur' width={34} height={34}></Rings>

            </div>
        </div>
    )
}

export default HamburgerIcon