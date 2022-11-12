import React from 'react'
import { useContext } from 'react'
import { dataHolder } from '../App'
import TextField from '@mui/material/TextField'

export default function New(hideBlur) {
    const dataGoingBack = useContext(dataHolder)
    const cancelNew = dataGoingBack[2]

  return (
    <>
        <div className='newNote' style={hideBlur.value?{display:"none"}:{display:"flex"}}>
            <TextField
            
            id="outlined-multiline-static"
            label="Topic"
            margin="normal"
            multiline
            rows={4}
            autoFocus="false"
            />
        </div>

        <div className='bgBlur' onClick={cancelNew} style={hideBlur.value?{display:"none"}:{display:"block"}}></div>
    </>
  )
}
