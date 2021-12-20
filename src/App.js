import Body from "./components/body/body.component";
import Header from "./components/header/header.component";
import Loader from "./components/loading-page/loader";

function App() {
  return (
    <>
      <Loader />
      <Header />
      <Body />
      {/* <Contact /> */}
    </>
  );
}

export default App;
