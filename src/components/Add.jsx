import React from 'react';
import {IoMdAdd} from 'react-icons/io'


function Add() {
    return(
        <div className='menuAddHeader'>
            <div>Add New Note</div>
            <div className='menuAddButton'>
                    <IoMdAdd/>
            </div>
        </div>
    )
}

export default Add