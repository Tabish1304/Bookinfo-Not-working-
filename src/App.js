import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { books } from "./data";
import BookInfo from "./Pages/BookInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route path="/books/1"  element={() => <BookInfo books={books} />} />
          {/* <Home></Home> */}
          {/* <Footer></Footer> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
