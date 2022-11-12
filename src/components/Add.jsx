import React from 'react';
import {IoMdAdd} from 'react-icons/io'
import { useContext } from 'react'
import { dataHolder } from '../App'


export default function Add() {
    const dataGoingBack = useContext(dataHolder)
    const openNew = dataGoingBack[3]

    return(
        <div className='menuAddHeader'>
            <div>Add New Note</div>
            <div className='menuAddButton' onClick={openNew}>
                    <IoMdAdd/>
            </div>
        </div>
    )
}
