import React from 'react'
import './skill.css'

export const Bar = ({value:{name, level}}) => {
    const bar_width= `${level}%`
    return (
        <>
        <div className='bar'>
            <div className='bar_wrapper' style={{'width':bar_width}}>
                <span   className='bar_name'>{name}</span>               
            </div>
            
        </div>
        </>
    )
}
