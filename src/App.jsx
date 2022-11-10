import React from 'react'
import Menu from './components/Menu'
import Note from './components/Note'
import {useState, createContext} from 'react'
import noteData from './noteData.js'


export const dataHolder = createContext()


export default function App() {
  const [data, setData] = useState(noteData)

  function setActive(idFromClick) {
    const newArray = []
    data.map(a=> {
      if(a.id === idFromClick) {a.active= true;newArray.push(a)} else {a.active=false;newArray.push(a)}
    })
    setData(newArray)
  }

  function deleteNote(idFromClick) {
    const newArray = []
    data.map(a=> {
        if(a.id!==idFromClick) {newArray.push(a)}
    })
    setData(newArray)
    console.log(newArray)
    console.log(data) //Why data is not updating?
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
