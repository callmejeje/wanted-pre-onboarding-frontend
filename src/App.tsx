import { Route, Routes } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <ContextProvider>
      <div className="w-[100vw] h-[100vh]">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
