import BackImg from "./노현지.jpg";
import "./App.css";
import BBsMain from "./main/BBsMain";

function App() {
  const background = {
    /* 변수이름은 중간에 -가 못들어가기때문에 카멜 케이스로 */
    backgroundImage: `url(${BackImg})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "100wh 50vh",
  };
  return (
    <div className="App">
      <header className="App-header" style={background}>
        <h3>REACT BBS 2020</h3>
        <p>React로 구현하는 BBS Project</p>
      </header>
      <BBsMain/>
      <footer className="footer">
        <address>CopyRight &copy; kiekuy47@gmail.com</address>
      </footer>
    </div>
  );
}

export default App;
