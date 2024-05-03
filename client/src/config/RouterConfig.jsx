import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleEmp from '../components/singleEmployee/SingleEmp'
import Home from '../screens/Home'
import NewTable from '../components/newTable/NewTable'



const RouterConfig = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='SingleEmp/:id' element={<SingleEmp/>}/>
        <Route path='table' element={<NewTable/>}/>
   
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterConfig