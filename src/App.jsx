import React from 'react'
import {createContext} from 'react'
import Menu from './components/Menu'
import Note from './components/Note'
import noteData from './noteData.json'

function App() {
  let [datas, setData] = React.useState(noteData)

  
  return (
    <div className='stage'>
      <dataToPass.Provider value={datas}>
        <Menu/>
        <Note/>
      </dataToPass.Provider>
    </div>
  )
}

export default App

//Export all Contexts
export const dataToPass = createContext()