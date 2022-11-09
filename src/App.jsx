import React from 'react'
import Menu from './components/Menu'
import Note from './components/Note'
import {useState, createContext} from 'react'
import noteData from './noteData.js'


export const dataHolder = createContext()


export default function App() {
  const [data, setData] = useState(noteData)

  function setActive(e) {
    // console.log(e)

    data.map(a=> {
      if(a.id === e) {
        const indexNumber = data.indexOf(a)
        console.log(data[indexNumber])

        console.log(data);
        // const newArray = data.splice(indexNumber,1)
        a.active = !a.active
        const newArray = [...data,a]
        setData(newArray.slice(-1))

        console.log(newArray);

      }
    })
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
