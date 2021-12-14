import Body from "./components/body/body.component";
import Contact from "./components/contact-page/contact.page.component";
import Header from "./components/header/header.component";
import Loader from "./components/loading-page/loader";

function App() {
  return (
    <>
      <Header />
      <Body />
      {/* <Contact /> */}
      <Loader />
    </>
  );
}

export default App;
