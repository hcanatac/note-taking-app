import React from 'react'
import {dataHolder} from '../App'
import {useContext} from 'react'

function Note() {
    const value = useContext(dataHolder)
    const data = value[0]

    function findActiveTopic() {
        return(
            data.map(a => a.active&&a.header.substring(0,90))
        )
    }

    function findActiveBody() {
        return(
            data.map(a => a.active&&a.body)
        )
    }

    return (
        <div className='noteBody'>
            <div className='noteTopic'>
                {findActiveTopic()}
            </div>
            <div className='noteData'>
                {findActiveBody()}
            </div>
        </div>
    );
}

export default Note;