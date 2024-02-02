import { useState } from 'react'
import Createblog from './components/Createblog'
import Blogs from './components/Blogs'
import Blog from './components/Blog'
import Totalblogs from './components/Totalblogs'

import { Routes,Route } from 'react-router-dom'
import { global } from './components/Global'



function App() {
  const [collect, setCollect]=useState({
id:0,
title:"",
blog:""

  })

  const [fulldata,setFulldata]=useState([])
  return (

<div>
  <global.Provider value = {{collect, setCollect,fulldata,setFulldata}}>

<Routes>

<Route path='/'element={<Createblog/>}   ></Route>
<Route path='/blog'element={<Blog/>}   ></Route>
<Route path='/blogs'element={<Blogs/>}   ></Route>
<Route path='/blogs/:id'element={<Totalblogs/>}   ></Route>




</Routes>

  </global.Provider>
    </div>
  )
}

export default App
