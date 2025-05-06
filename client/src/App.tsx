import { useState } from "react";
function App() {
  const [count, setCount] = useState<number>(0)
  return (
    <div className="h-full min-h-screen bg-black/90 text-white/90 flex justify-center items-center ">
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  )
}

export default App
