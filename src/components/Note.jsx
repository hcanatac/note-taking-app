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
        <>
            <div className='noteBody' style={data.value.length===0?{display:'none'}:{display:'block'}}>
                <div className='noteTopic'>
                    {findActiveTopic()}
                </div>
                <div className='noteData'>
                    {findActiveBody()}
                </div>
            </div>
            <div className='noteBody' style={data.value.length===0?{display:'flex'}:{display:'none'}}>Click "+" icon to add a note.</div>
        </>
    );
}
