import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Missing from "./pages/Missing"
function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="*" element={<Missing/>} />
        <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
