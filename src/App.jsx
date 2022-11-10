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
      if(a.id === idFromClick) {a.active= !a.active;newArray.push(a)} else {a.active=false;newArray.push(a)}
    })

    setData(newArray)
    
    console.log(newArray)
    console.log(data)
  }

  return (
    <div className='stage'>
      <dataHolder.Provider value={setActive}>
        <Menu value={data}/>
        <Note value={data}/>
      </dataHolder.Provider>
    </div>
  )
}
