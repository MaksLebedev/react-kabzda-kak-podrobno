import "./App.css";
import { PageTitle } from "./components/appTitle/PageTitle";
import { Accordion } from "./components/accordion/Accordion";
import { Rating } from "./components/rating/Rating";
import { OnOff } from "./components/onOff/OnOff";

function App() {
  console.log("App rendering");
  return (
    <div className="App">
      {/* <PageTitle title="This is APP component" />
      <PageTitle title="My friends" />
      Article 1
      <Rating value={3} />
      <Accordion titleValue="Menu" collapsed={true} />
      <Accordion titleValue="Users" collapsed={false} />
      Article 2
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} /> */}
      <OnOff on={true} />
    </div>
  );
}

export default App;
