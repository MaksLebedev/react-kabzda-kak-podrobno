import "./App.css";
import { PageTitle } from "./components/appTitle/PageTitle";
import { Accordion } from "./components/accordion/Accordion";
import { Rating } from "./components/rating/Rating";

function App() {
  console.log("App rendering");
  return (
    <div className="App">
      <PageTitle title="This is APP component" />
      <PageTitle title="My friends" />
      Article 1
      <Rating value={3} />
      <Accordion title="Меню" />
      <Accordion title="МИНЮ" />
      Article 2
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

export default App;
