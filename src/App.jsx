import React from 'react'
import Menu from './components/Menu'
import Note from './components/Note'
import New from './components/New'
import {useState, createContext} from 'react'
import noteData from './noteData.js'


export const dataHolder = createContext()


export default function App() {
  const [data, setData] = useState(noteData)
  const [hideBlur,setHideBlur] = useState(false)



  function openNew() {
    setHideBlur(false)
  }

  function cancelNew() {
    setHideBlur(true)
  }

  //Which note is active right now?
  function setActive(idFromClick) {
    const newArray = []
    data.map(a=> {
      if(a.id === idFromClick) {a.active= true;newArray.push(a)} else {a.active=false;newArray.push(a)}
    })
    setData(newArray);
  }

  function saveNewNote(t,n) {
    const random = String(Math.floor(Math.random() * 999999))
    const newList = []
    newList.push({id: random,active:false,topic:t,body:n})
    data.map(a=>newList.push(a))
    newList[0].active=true
    newList[1].active=false
    setData(newList)

    cancelNew()

  }

  //Delete the note and set the top one active
  function deleteNote(idFromClick) {
    const newArray = []
    data.map(a=>{
      if(a.id===idFromClick){data.splice(data.indexOf(a),1)}
      newArray.push(a)
    })
    setData(newArray)

    //Set the top one active after a little bit later because of async
    setTimeout(() => {
      data.length>0&&setActive(data[0].id)
    }, 1);
  }


  return (
    <dataHolder.Provider value={[setActive, deleteNote, cancelNew, openNew, saveNewNote]}>

        <New value={hideBlur} data={data}/>
        
        <div className='stage' style={window.innerHeight<665?{transform:"scale(80%)"}:{transform:"scale(100%)"}}>
            <Menu value={data}/>
            <Note value={data}/>
        </div>

    </dataHolder.Provider>
  )
}
