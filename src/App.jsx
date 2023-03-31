import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BlogsContainer from "./component/BlogsContainer/BlogsContainer";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BlogsContainer />
      <div className="border border-b-clr">
        <ToastContainer theme="dark" />
      </div>
    </div>
  );
}

export default App;
