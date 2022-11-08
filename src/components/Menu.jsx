import React from 'react'
import Add from './Add'
import {FiTrash} from 'react-icons/fi'
import { dataHolder } from '../App'
import { useContext } from 'react'

export default function Menu() {
    //Read main state in App.jsx
    const value = useContext(dataHolder)
    const data = value[0]

    //return(console.log((value[0])[0].id)) //IT READS LIKE THIS FROM CONTEXT ARRAY FROM APP.JS

    //Read the headers of notes and highlight the active one
    function getHeaders(){
        return(
            data.map
            (a =>
                <div id={data.indexOf(a)} key={Math.floor(Math.random() * 999999)} className='noteEntry' style={a.active?{backgroundColor:'#68756E'}:{backgroundColor:'#4D5F55'}}  onClick={setActive}>
                    <div id={data.indexOf(a)}>{a.header.length>55?a.header.substring(0,55)+'...':a.header}</div>
                    <div className='deleteEntry'><FiTrash/></div>
                </div>
            )
        )
    }

    function setActive(e) {
        const indexNumber = e.target.id
        const whichActive = value[1]
        whichActive(indexNumber)
    }

    return(
        <div className='menu'>
            <Add/>
            <div className='entries'>{getHeaders()}</div>
        </div>
    )
}
