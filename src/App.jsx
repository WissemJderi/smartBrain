import "./App.css";
import ImageLinkForm from "./components/imagelinkform/ImageLinkForm.JSX";
import Logo from "./components/logo/Logo";
import Navigation from "./components/navigation/Navigation";
import Rank from "./components/rank/Rank";
import ParticlesBg from "particles-bg";
function App() {
  return (
    <>
      <ParticlesBg type="cobweb" bg={true} num={20} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />

      {/*     <FaceRecognition /> */}
    </>
  );
}

export default App;
