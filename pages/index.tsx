import React, {useState} from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Inputs from '../components/inputs'
import {Data} from '../types/data'
import {render, renderback, rendermid} from '../scripts/canvas'

const Home: NextPage = () => {

  return (
      <Link href="/generate">
        <a>Hello</a>
      </Link>
    )
}

export default Home
