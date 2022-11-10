import React from 'react'

export default function Note(data) {

    function findActiveTopic() {
        return(
            data.value.map(a => a.active&&a.topic.substring(0,90))
        )
    }

    function findActiveBody() {
        return(
            data.value.map(a => a.active&&a.body)
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
