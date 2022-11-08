import React from 'react'
import Menu from './components/Menu'
import Note from './components/Note'
import {useState, createContext} from 'react'
import noteData from './noteData.json'


export const dataHolder = createContext()


export default function App() {
  const [data, setData] = useState(JSON.parse(noteData))

  function whichActive(indexNumber) {
    console.log(data[0].active);

    setData(prevData => ([...prevData, prevData[indexNumber].active = !data[indexNumber].active]))

    console.log(data[0].active);
    
  }
  
  return (
    <div className='stage'>
      <dataHolder.Provider value={[data,whichActive]}>
        <Menu/>
        <Note/>
      </dataHolder.Provider>
    </div>
  )
}
