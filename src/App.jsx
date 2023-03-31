import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Accordion from "./component/Accordion/AccordionBody";
import BlogsContainer from "./component/BlogsContainer/BlogsContainer";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BlogsContainer />
      <Accordion />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
