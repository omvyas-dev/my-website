import React from 'react'
import Menubar from '../Menubar'
import Chat from './Chat'
import Leftbar from '../Leftbar'
import Titlebar from './Titlebar'
import Sectitlebar from './Sectitlebar'

export default function Dashboard() {
  return (
    <div>
            <div className="flex flex-col flex-1 mt-80">
                <Titlebar/>
                <Sectitlebar />
                    <div className="flex flex-1">
                      <div className="w-72">
                        <Menubar />
                      </div>
                      <div className="flex-1 overflow-y-auto">
                        <Chat />
                      </div>
                      <div className="w-[310px]">
                        <Leftbar />
                      </div>
        </div>
        </div>
    </div>
  )
}
