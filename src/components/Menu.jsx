import React from 'react'
import Add from './Add'
import { FiTrash } from 'react-icons/fi'
import { dataHolder } from '../App'
import { useContext, useEffect } from 'react'


export default function Menu() {
    //Read main state in App.jsx
    const dataComing = useContext(dataHolder)
    const data = dataComing[0]
    const setActive = dataComing[1]

    //Read the headers of notes and highlight the active one
    useEffect(()=>{
        console.log("useEffect tetiklendi");
    },[data])


    function getHeaders(){
        return(
            data.map
            (a =>
                <div id={a.id} key={Math.floor(Math.random() * 999999)} className='noteEntry' style={a.active?{backgroundColor:'#68756E'}:{backgroundColor:'#4D5F55'}} onClick={changeActive}>
                    <div id={a.id} onClick={changeActive}>{a.topic.length>55?a.topic.substring(0,55)+"...":a.topic}</div>
                    <div className='deleteEntry'><FiTrash/></div>
                </div>
            )
        )
    }

    function changeActive(e) {
        const dataId = e.target.id
        setActive(dataId)
    }


    return(
        <div className='menu'>
            <Add/>
            <div className='entries'>{getHeaders()}</div>
        </div>
    )
}
