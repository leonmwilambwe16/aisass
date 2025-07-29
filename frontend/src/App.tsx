import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Dashboard from './Pages/Dashboard'
import WriteArticle from './Pages/WriteArticle'
import BlogTitles from './Pages/BlogTitles'
import GenerateImage from './Pages/GenerateImage'
import { Toaster } from 'react-hot-toast'


function App() {
  

  return (
    <div>
    <Toaster/>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/ai' element={<Layout/>}>
     <Route index element={<Dashboard />} />
     <Route path='write-article' element={<WriteArticle />} />
     <Route path='blog-tittles'  element={<BlogTitles/>} />
     <Route path='generate-images'  element={<GenerateImage/>} />
    </Route>
    </Routes>
    </div>

  
  )
}

export default App   

