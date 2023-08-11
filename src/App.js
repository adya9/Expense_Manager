import Home from "./pages/Home";
import Header from "./components/header";
import Footer from "./components/footer";
import Addexpense from "./pages/add-expense";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {Routes} from 'react-router-dom';

function App() {
  return(
    <Router>
      {/* <div>Header</div> */}
      <Header/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add-expense' exact element={<Addexpense/>}></Route>
      </Routes>
      
      <Footer/>
      
    </Router>
  );
}

export default App;
