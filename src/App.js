import { Route, Routes } from "react-router-dom";
import { Signup } from "@/pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
