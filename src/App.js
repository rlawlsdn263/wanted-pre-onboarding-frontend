import { Link, Route, Routes } from "react-router-dom";
import { Signup, Signin, Todo, Home } from "@/pages/index";
import { PrivateRoutes, PrivateRoutes2 } from "@/utils";

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <Link to="/">홈</Link>
        </li>
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
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
        <Route element={<PrivateRoutes2 />}>
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
