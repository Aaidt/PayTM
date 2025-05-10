import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Signin } from "./components/ui/Signin"
import { Signup } from "./components/ui/Signup"
import { LandingPage } from "./pages/LandingPage"
import { Dashboard } from "./pages/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
