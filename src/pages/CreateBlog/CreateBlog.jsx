
import React from 'react'
import './CreateBlog.css'

const CreateBlog = () => {

  return (
    <div className='createblog'>
      <h1>Create Blog Post</h1>
      <form className='blog-post-form'>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Blog Title</label>
          <input type="text" className="form-control" htmlFor="exampleFormControlInput1" placeholder="Enter blog title"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Write Blog</label>
          <textarea className="form-control" htmlFor="exampleFormControlTextarea1" rows="6" placeholder="Write your blog here..."></textarea>
        </div>
        <div className="mb-3">
          
          <input type="submit" className="form-control" htmlFor="exampleFormControlInput1" value="post"/>
        </div>

      </form>

    </div>
  )
}

export default CreateBlog
