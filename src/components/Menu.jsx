import React, { useEffect } from 'react'
import Add from './Add'
import { FiTrash } from 'react-icons/fi'
import { dataHolder } from '../App'
import { useContext } from 'react'


export default function Menu(data) {
    const dataGoingBack = useContext(dataHolder)
    const setActive = dataGoingBack[0]
    const deleteNote = dataGoingBack[1]


    function changeActive(e) {
        const dataId = e.target.id
        setActive(dataId);
    }

    function deleteIt(e) {
        const dataId = e.target.parentElement.id
        deleteNote(dataId);
    }


    //Dark / Light mode adjusment
    const [activeColor, setActiveColor] = React.useState(null)
    const [passiveColor, setPassiveColor] = React.useState(null)
    const [fontColor, setFontColor] = React.useState(null)
    
    useEffect(()=>{
        setActiveColor(data.darkMode?"#68756E":"#99c4ad")
        setPassiveColor(data.darkMode?"#4D5F55":"#799b89")
        setFontColor(data.darkMode?"#ececec":"black")
    },[data.darkMode])
    



    function getHeaders(){
        return(
            data.value.map(a=>(
                <div id={a.id} key={Math.floor(Math.random() * 999999)} className='noteEntry' style={a.active?{backgroundColor:activeColor,color:fontColor}:{backgroundColor:passiveColor,color:fontColor}} onClick={changeActive}>
                    <div id={a.id}>{a.topic.length>55?a.topic.substring(0,55)+"...":a.topic}</div>
                    <div className='deleteEntry' onClick={deleteIt}><FiTrash/></div>
                </div>
                )
            )
        )
    }
    return(
        <div className='menu'>
            <Add/>
            <div className='entries'>{getHeaders()}</div>
        </div>
    )
}
