import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Signin } from "./components/ui/Signin"
import { Signup } from "./components/ui/Signup"
import { LandingPage } from "./pages/LandingPage"
import { Dashboard } from "./pages/Dashboard"
import { Transaction } from "./pages/Transaction"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sigin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
