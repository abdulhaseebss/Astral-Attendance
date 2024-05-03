import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleEmp from '../components/singleEmployee/SingleEmp'
import Home from '../screens/Home'
import AllMembers from '../screens/AllMembers'



const RouterConfig = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='SingleEmp/:id' element={<SingleEmp/>}/>
        <Route path='Allmembers' element={<AllMembers/>}/>
   
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterConfig