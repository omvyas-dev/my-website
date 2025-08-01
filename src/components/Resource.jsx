import React from 'react'
import Menubar from '../Menubar'
import Chat from './Chat'
import Leftbar from '../Leftbar'

export default function Resource() {
  return (
    <div>
        <div className="flex gap-4 p-4 bg-gray-50">
      
      <div className="flex-1">
       <Menubar/>
      </div>

      
      <div className="flex-1">
        <Chat/>
      </div>

      
      <div className="flex-1">
       <Leftbar/>
      </div>
    </div>
    </div>
  )
}
