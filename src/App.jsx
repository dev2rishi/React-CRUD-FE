import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

const App = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="container mx-auto p-2">
          <Link to="/"><h2 className="text-white text 2xl font-bold">React CRUD</h2></Link>
        </div>
      </nav>
      <section>
      <div className="container mx-auto p-2">
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
          <Route path="/edit" element={<EditPage />}></Route>
        </Routes>
      </div>
      <ToastContainer />
      </section>
     {/* <footer className="bg-orange-400">
      <div className="container text-center mx-auto">Created by Rishabh Singh @2024</div>
     </footer> */}
    </div>
  );
};

export default App;
