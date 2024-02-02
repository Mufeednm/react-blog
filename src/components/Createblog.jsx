import React from 'react'
import { Link } from 'react-router-dom'
import Blog from './Blog'

const Createblog = () => {
  return (
    <div>  
        <h2>

        Blogs of  Creativity 
        </h2><br /><br /><br /><br />
        
        <button >

        <Link to={"Blog"}>click</Link>
        </button>
    </div>
  )
}

export default Createblog