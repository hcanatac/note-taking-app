import React, { useEffect } from 'react'
import { useContext } from 'react'
import { dataHolder } from '../App'
import { FaRegWindowClose } from 'react-icons/fa'

export default function New(e) {
    const [topic, setTopic] = React.useState('')
    const [note, setNote] = React.useState('')

    const dataGoingBack = useContext(dataHolder)

    function cancelNew(e) {
      setTopic('')
      setNote('')
      dataGoingBack[2]()
    }

    function handleOnChange(e) {
      setTopic(e.target.parentElement.childNodes[1].value)
      setNote(e.target.parentElement.childNodes[2].value)
    }

    function saveNewNote() {
      dataGoingBack[4](topic,note)
    }

    //If new entry added in App then clear states here (also text fields)
    useEffect(()=>{
      cancelNew()
    },[e.data])

  return (
    <>

      <div className='newNote' style={e.value?{display:"none"}:{display:"flex"}}>

        <FaRegWindowClose className='newCloseButton' onClick={cancelNew}/>

        <input type="text" placeholder='Topic (Max. 90 Characters)' className='newNoteTopic' name='newNoteTopic' onChange={handleOnChange} value={topic}/>
        <textarea type="text" placeholder='Note' className='newNoteBody' name='newNoteBody' onChange={handleOnChange} value={note}/>

        <div>
          <button className='newAddButton' onClick={saveNewNote}>Add</button>
          <button className='newCancelButton' onClick={cancelNew}>Cancel</button>
        </div>
        
      </div>

      <div className='bgBlur' onClick={cancelNew} style={e.value?{display:"none"}:{display:"block"}}></div>
    </>
  )
}
