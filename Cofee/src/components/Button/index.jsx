import React from 'react'
import "./index.scss"

export function WhiteButton({text}) {
    return(
        <button className='whitebutton '>
            {text}
        </button>
    )
}

export function BeigeButton({text}) {
    return (
        <button className='beigebutton left-to-right'>
            {text}
        </button>
    )
}