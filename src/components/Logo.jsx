import React from 'react'
import Hero from '/Hero.svg'


function Logo({ width = '100px' }) {
    return (
        <div>
            <img className='' width={width} src={Hero} alt="" />
        </div>
    )
}

export default Logo