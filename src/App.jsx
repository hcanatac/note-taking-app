import React from 'react'
import Menu from './components/Menu'
import Note from './components/Note'
import {useState, createContext} from 'react'
import noteData from './noteData.js'



export const dataHolder = createContext()


export default function App() {
  const [data, setData] = useState(noteData)

  function setActive(idFromClick) {
    // console.log(e)
    data.map(a=> {
      if(a.id === idFromClick) {
        a.active = true
      } else {
        a.active = false
      }
      // a.aid===idFromClick?a.active=true:a.active=false
    })
    setData(data)
    console.log(data);

  }

  return (
    <div className='stage'>
      <dataHolder.Provider value={[data,setActive]}>
        <Menu/>
        <Note/>
      </dataHolder.Provider>
    </div>
  )
}
