import React from 'react'
import "./index.scss"

export function WhiteButton({text}) {
    return(
        <button className='whitebutton left-to-right-white'>
            {text}
        </button>
    )
}

export function BeigeButton({text}) {
    return (
        <button className='beigebutton salam left-to-right'>
            {text}
        </button>
    )
}