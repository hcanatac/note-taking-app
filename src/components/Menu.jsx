import React from 'react'
import Add from './Add'
import {FiTrash} from 'react-icons/fi'
import {useContext} from 'react'
import {dataToPass} from '../App'

function Menu() {
    const data = useContext(dataToPass)

    function getHeaders(){
        return(
            data.map
            (a =>
            <div id={a.id} className='noteEntry' style={a.active?{backgroundColor:'#68756E'}:{backgroundColor:'#4D5F55'}}>
                <div>{a.header.length>55?a.header.substring(0,55)+'...':a.header}</div>
                <div className='deleteEntry' onClick={handleClick}><FiTrash/></div>
            </div>
            )
        )
    }

    function handleClick(e) {
        console.log(e.target.parentElement.parentElement.id);
        document.getElementById(e.target.parentElement.parentElement.id).remove()
    }



    return(
        <div className='menu'>
            <Add/>
            <div className='entries'>{getHeaders()}</div>
        </div>
    )
}

export default Menu