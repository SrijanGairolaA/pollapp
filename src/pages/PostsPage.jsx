import React from 'react'
import Posts from '../components/Posts'

const PostsPage = () => {
  return (
    <div className=' w-3/6'>
    <div className=' text-lg mb-10 shadow-lg flex justify-center items-center'>
      <div>Posts</div>
    </div>
  <Posts/>
    </div>
  )
}

export default PostsPage
