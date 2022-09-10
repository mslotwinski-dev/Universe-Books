import React, {useState} from 'react'
import type { NextPage } from 'next'
import Inputs from '../components/inputs'
import {Data} from '../types/data'
import {render, renderback, rendermid} from '../scripts/canvas'

const Generate: NextPage = () => {
  const [showInputs, toggleInputs] = useState(true)
  const [let_me_back, changeBackButtonColor ] = useState('#999')

  const generate = (data:Data) => {
    toggleInputs(!showInputs)
    changeBackButtonColor(data.color)
    render(document.querySelector('#canvas'), data)
    renderback(document.querySelector('#canvasback'), data)
    rendermid(document.querySelector('#canvasmid'), data)
  }

  const unrender = () => {
    toggleInputs(!showInputs)

    const canvasarray: (HTMLCanvasElement | null)[] = [
      document.querySelector('#canvas'),
      document.querySelector('#canvasback'),
      document.querySelector('#canvasmid')
    ]

    for (const can of canvasarray) {
      const ctx = can?.getContext('2d')
      if (!can || !ctx) return
      ctx.filter = 'none'
      ctx?.clearRect(0, 0, can.width, can.height)
    }

  }

  return (
    <div id="cont" > 
      { showInputs && <Inputs onSubmit={(data: Data)=>generate(data)}/>} 
      
      { !showInputs && <div className="unrender" style={{backgroundColor: let_me_back}} onClick={() => unrender()} >{'🢀'}</div> }
      <canvas width="825" height="1200" id="canvasback" className={showInputs ? 'hidemexD' : undefined}></canvas> 
      <canvas width="82.5" height="1200" id="canvasmid" className={showInputs ? 'hidemexD' : undefined}></canvas> 
      <canvas width="825" height="1200" id="canvas" className={showInputs ? 'hidemexD' : undefined}></canvas>

    </div>
  )
}

export default Generate
