import React from 'react'
import SideBar from '../components/SideBar'
import PostsPage from './PostsPage'
import SearchBar from '../components/SearchBar'
const Home = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <PostsPage/>
      <SearchBar/>
    </div>
  )
}

export default Home