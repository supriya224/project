
import './App.css';
import Body from './component/BodySection/Body';
// import Header from './component/header/Header'
import Navbar from './component/header/Navbar';
import Section from './component/section/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
    {/* <Header /> */}
    <Body />
    <Section/>
    </div>
  );
}

export default App;
