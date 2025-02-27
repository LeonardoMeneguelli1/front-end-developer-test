import './App.css'
import NavbarTab from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Packages from "./components/packages/Packages";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Blog from "./components/blog/Blog";

function App() {

  return (
    <div className="App">
      <NavbarTab/>
      <Header/>
      <Packages/>
      <Form/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
