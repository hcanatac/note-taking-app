import React from 'react'
import {dataHolder} from '../App'
import {useContext} from 'react'

function Note() {
    const dataComing = useContext(dataHolder)
    const data = dataComing[0]

    function findActiveTopic() {
        return(
            data.map(a => a.active&&a.topic.substring(0,90))
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