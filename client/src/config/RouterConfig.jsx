import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleEmp from '../components/singleEmployee/SingleEmp'
import Home from '../screens/Home'
import NewTable from '../components/newTable/NewTable'

import AllMembers from '../screens/AllMembers'

import NewTable from '../components/newTable/NewTable'



const RouterConfig = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
<<<<<<< HEAD
        <Route path='SingleEmp/' element={<SingleEmp/>}/>
        <Route path='NewTable/' element={<NewTable/>}/>
=======
        <Route path='SingleEmp/:id' element={<SingleEmp/>}/>

        <Route path='Allmembers' element={<AllMembers/>}/>

        <Route path='table' element={<NewTable/>}/>
>>>>>>> 131ca9e18a9d0580ea5476cd6a26cce040877cf5
   
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterConfig