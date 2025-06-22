import "./App.css";
import Header from "./components/Header";
import image from "./assets/svgs/headerBgImage.svg";
function App() {
  return (
    <>
      <div className="xl:max-w-7xl bg-amber-500 mx-auto">
        <Header />
      </div>
      <img className="w-full h-screen" src={image} alt="" />
    </>
  );
}

export default App;
