import React, { useEffect } from 'react'
import { useContext } from 'react'
import { dataHolder } from '../App'
import { IoIosClose } from 'react-icons/io'

export default function New(data) {
    const [topic, setTopic] = React.useState('')
    const [note, setNote] = React.useState('')
    const [isEmpty, setIsEmpty] = React.useState(true)

    const dataGoingBack = useContext(dataHolder)

    function cancelNew() {
      setTopic('')
      setNote('')
      dataGoingBack[2]()
      setIsEmpty(true)
    }

    function handleOnChange(e) {
      const topicValue = e.target.parentElement.childNodes[1].value
      const noteValue = e.target.parentElement.childNodes[2].value

      setTopic(topicValue)
      setNote(noteValue)
      setIsEmpty(false)
    }

    function saveNewNote() {
        dataGoingBack[4](topic,note)
    }

    //If new entry added in App then clear states here (also text fields)
    useEffect(()=>{
      cancelNew()
    },[data.data])

  return (
    <>

      <div className='newNote' style={data.value?{display:"none"}:{display:"flex"}}>

        <IoIosClose className='newCloseButton' onClick={cancelNew}/>

        <input type="text" placeholder='Topic (Max. 90 Characters)' className='newNoteTopic' name='newNoteTopic' onChange={handleOnChange} value={topic} maxLength={90}/>
        <textarea rows="99" type="text" placeholder='Note' className='newNoteBody' name='newNoteBody' onChange={handleOnChange} value={note}/>

        <div>
          <button className='newAddButton' onClick={saveNewNote} disabled={isEmpty} style={isEmpty?{backgroundColor:'grey',cursor:'default'}:{backgroundColor:'#C65A13'}}>Add</button>
          <button className='newCancelButton' onClick={cancelNew}>Cancel</button>
        </div>
        
      </div>

      <div className='bgBlur' onClick={cancelNew} style={data.value?{display:"none"}:{display:"block"}}></div>
    </>
  )
}
