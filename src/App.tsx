import { Route, Routes } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <ContextProvider>
      <div className="w-[100vw] h-[100vh] flex justify-center">
        <div className="w-[600px] h-full pt-4 pb-[56px]">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/todo" element={<TodoPage />} />
          </Routes>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
