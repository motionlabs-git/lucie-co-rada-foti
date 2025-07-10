import Lenis from 'lenis'
import React, { RefObject } from 'react'

interface Props {
    lenis: RefObject<Lenis | null>
}

function Navigation({ lenis }: Props) {


    const scrollTo = (id: string) => {
        lenis.current?.scrollTo(id)
    }

    return (
        <div className='' onClick={() => scrollTo('#hero')}>Navigation</div>
    )
}

export default Navigation