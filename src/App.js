import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">      
      <Drawer />
      <Header />

      <div className="content p-40">

        <div className="d-flex align-center justify-between mb-40">
          <h1>Все пульты</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Поиск" />
            <input placeholder="Поиск ... " />
          </div>
        </div>

        <div className="d-flex">
          <Card />          
          <Card />          
          <Card />          
          <Card />          
        </div>

      </div>

    </div>
  );
}

export default App;