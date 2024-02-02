import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Blogs from './Blogs';
import { global } from './Global';
import { useNavigate } from 'react-router-dom';




const Blog = () => {
  const navigate = useNavigate()
  const { collect, setCollect, fulldata, setFulldata } = useContext(global)


  const handleClick = (e) => {
    e.preventDefault();
    fulldata.push(collect)
    navigate("/blogs")
  }


  return (
    <div className='head'>
      <h2>Enter your Blog</h2>

      <form onSubmit={handleClick}>
        <textarea

          onChange={(e) => {
            setCollect(

              {
                ...collect,
                id: Math.random() * 10,
                title: e.target.value
              }

            )
          }}
          style={{ height: 25 }}
          placeholder='TITLE'
        />
        <br /><br />



        <textarea

          onChange={(e) => {
            setCollect
              (
                {
                  ...collect,
                  blog: e.target.value
                }
              )

          }}

          style={{ height: 100 }}
          placeholder='Content'

        />

        <br />


        <button type='submit'>SUBMIT</button>

      </form>








    </div>
  );
}

export default Blog;
