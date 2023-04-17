import { Route, Routes } from "react-router-dom";
import { Signup, Signin } from "@/pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
