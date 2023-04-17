import { Link, Route, Routes } from "react-router-dom";
import { Signup, Signin, Todo } from "@/pages/index";

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <Link to="/signup">회원가입</Link>
        </li>
        <li>
          <Link to="/signin">로그인</Link>
        </li>
        <li>
          <Link to="/todo">투두리스트</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
