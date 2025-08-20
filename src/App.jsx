
import './App.css'
import { Routes ,Route} from 'react-router-dom'
import RootLayout from './Components/layouts/RootLayout'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Error from "./Components/Pages/Error"

function App() {


  return (
   <>
  <Routes>
    <Route path="/" element={< RootLayout/>}>
    <Route index element={<Home/>}/>
     <Route path="about" element={<About/>}/>
      <Route path="*" element={<Error/>}/>
    </Route>
  </Routes>
   </>

  )
}
export default App
