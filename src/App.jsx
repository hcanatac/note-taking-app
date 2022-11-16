import React,{useState, createContext, Suspense} from 'react'
import Menu from './components/Menu'
import Note from './components/Note'
import New from './components/New'
import noteData from './noteData.js'
import {TbMoon} from 'react-icons/tb'
import {BsSun} from 'react-icons/bs'
import './style.scss'




export const dataHolder = createContext()


export default function App() {
  const [data, setData] = useState(noteData)
  const [hideBlur,setHideBlur] = useState(false)
  const [darkMode,setDarkMode] = useState(true)



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

    newList.push({id: random,active:false,topic:t===""?"(no topic)":t,body:n===''?'(no note)':n}) //Push the new one first
    data.map(a=>newList.push(a)) //Then the old ones

    newList.map(a=>{
      if(a.active){a.active=false}
    })

    newList[0].active=true

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
        
        <BsSun size={20} className="changeThemeButton" onClick={()=>setDarkMode(!darkMode)} style={darkMode?null:{display:"none"}}/>
        <TbMoon size={20} className="changeThemeButton" onClick={()=>setDarkMode(!darkMode)} style={darkMode?{display:"none"}:null}/>

        <div className='stage'>
            <Menu value={data} darkMode={darkMode}/>
            <Note value={data}/>
        </div>

    </dataHolder.Provider>
  )
}
