import React, { useEffect } from 'react'

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


    const [empty, setEmpty] = React.useState(false)

    useEffect(()=>{
        setEmpty(data.value.length===0?true:false)
        if(darkMode&&empty){}
    },[data.value.length,data.darkMode])

    const show = empty?{display:'none'}:{display:'flex'}
    const background = data.darkMode?{backgroundColor:'#354957'}:{backgroundColor:'#aaaaaa'}
    const fontColor = data.darkMode?{color:"#ececec"}:{color:"black"}

    console.log(show,background);

    return (
        <>
            <div className='noteBody' style={}>
                <div className='noteTopic'>
                    {findActiveTopic()}
                </div>
                <div className='noteData'>
                    {findActiveBody()}
                </div>
            </div>
            <div className='noteBody' style={}>Click "+" icon to add a note.</div>
        </>
    );
}
