import React from 'react'
import { Bar } from './bar'



const lang =[

{
     name:'Core Java',
    level:'80',
},
{
    name:'Sql',
    level:'70',
},

{
    name:'JavaScript',
    level:'70',
},
{
    name:'Reactjs',
    level:'70',
},
{
    name:'Html',
    level:'69',
},
{
    name:'Css',
    level:'65',
},
{
    name:'Bootstrap',
    level:'65',
},

{
    name:'Nodejs',
    level:'60',
},
{
    name:'Expressjs',
    level:'50',
},
{
    name:'MongoDB',
    level:'40',
},
]

export const Skill = () => {
    return (
        <>
        <div className='language'>
            
            {
                lang.map(language=><Bar value={language}/>)
            }
        </div>
        </>
    )
}

