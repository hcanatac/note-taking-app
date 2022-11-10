import React, { useEffect } from 'react'
import Menu from './components/Menu'
import Note from './components/Note'
import {useState, createContext} from 'react'
import noteData from './noteData.js'


export const dataHolder = createContext()


export default function App() {
  const [data, setData] = useState(noteData)

  //Which note is active right now?
  function setActive(idFromClick) {
    const newArray = []
    data.map(a=> {
      if(a.id === idFromClick) {a.active= true;newArray.push(a)} else {a.active=false;newArray.push(a)}
    })
    setData(newArray)
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
    <div className='stage'>
      <dataHolder.Provider value={[setActive, deleteNote]}>
        <Menu value={data}/>
        <Note value={data}/>
      </dataHolder.Provider>
    </div>
  )
}
