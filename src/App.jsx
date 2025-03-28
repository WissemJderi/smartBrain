import { useState } from "react";
import "./App.css";
import ImageLinkForm from "./components/imagelinkform/ImageLinkForm.JSX";
import Logo from "./components/logo/Logo";
import Navigation from "./components/navigation/Navigation";
import Rank from "./components/rank/Rank";
import ParticlesBg from "particles-bg";
function App() {
  const [input, setInput] = useState();

  function onInputChange(event) {
    console.log(event.target.value);
  }

  function onButtonSubmit() {
    console.log("Click");
  }
  return (
    <>
      <ParticlesBg type="cobweb" bg={true} num={20} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      {/*     <FaceRecognition /> */}
    </>
  );
}

export default App;
