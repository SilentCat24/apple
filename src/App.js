import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Content from "./components/contents/content";
import Body from "./components/Body/Body";
import Items from "./components/Items/Items";
import Action from "./components/Action/Action";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Content />
      <Body />
      <Items />
      <Action />
      <Footer />
    </div>
  );
}

export default App;
