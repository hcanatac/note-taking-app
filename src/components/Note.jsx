import React from 'react'
import {useContext} from 'react'
import {dataToPass} from '../App'

function Note() {
    const data = useContext(dataToPass)

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