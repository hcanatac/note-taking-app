import React, { useEffect } from 'react';
import {IoMdAdd} from 'react-icons/io'
import { useContext } from 'react'
import { dataHolder } from '../App'


export default function Add(data) {
    const dataGoingBack = useContext(dataHolder)
    const openNew = dataGoingBack[3]

    return(
        <div className='menuAddHeader' style={data.darkMode?{backgroundColor:"#404040"}:{backgroundColor:"#c3c3c3"}}>
            <div style={data.darkMode?{color:"#ececec"}:{color:"black"}}>Add New Note</div>
            <div className='menuAddButton' onClick={openNew}>
                    <IoMdAdd/>
            </div>
        </div>
    )
}
