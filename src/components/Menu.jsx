import React from 'react'
import Add from './Add'
import { FiTrash } from 'react-icons/fi'
import { dataHolder } from '../App'
import { useContext, useEffect } from 'react'
import noteData from '../noteData.js'



export default function Menu(data) {
    const dataGoingBack = useContext(dataHolder)
    const setActive = dataGoingBack

    
    function changeActive(e) {
        const dataId = e.target.id
        setActive(dataId);
    }


    useEffect(()=>{
        console.log("useEffect OK")
    },[noteData])


    function getHeaders(){
        return(
            data.value.map(a=>(
                <div id={a.id} key={Math.floor(Math.random() * 999999)} className='noteEntry' style={a.active?{backgroundColor:'#68756E'}:{backgroundColor:'#4D5F55'}} onClick={changeActive}>
                    <div id={a.id}>{a.topic.length>55?a.topic.substring(0,55)+"...":a.topic}</div>
                    <div className='deleteEntry'><FiTrash/></div>
                </div>
                )
            )
        )
    }

    return(
        <div className='menu'>
            <Add/>
            <div className='entries'>{getHeaders()}</div>
        </div>
    )
}
