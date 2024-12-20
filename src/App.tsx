import "./App.css";
import { PageTitle } from "./components/appTitle/PageTitle";
import { Accordion } from "./components/accordion/Accordion";
import { Rating, RatingValueType } from "./components/rating/Rating";
import { UncontrolledOnOff } from "./components/uncontrolledOnOff/UncontrolledOnOff";
import { UncontrolledAccordion } from "./components/uncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/uncontrolledRating/UncontrolledRating";
import { useState } from "react";
import { OnOff } from "./components/onOff/OnOff";

function App() {
  console.log("App rendering");

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchOn, setSwitchOn] = useState<boolean>(false);


  return (
    <div className="App">
      {/* <UncontrolledAccordion titleValue="Menu" /> */}
      <Accordion
        titleValue="Menu"
        collapsed={accordionCollapsed}
        onChange={() => {
          setAccordionCollapsed(!accordionCollapsed);
        }}
        items={[]}
        onClick={() => {}}
      />

      <OnOff
        on={switchOn}
        onChange={(on) => {
          setSwitchOn(on);
        }}
      />

      <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

      {/* <UncontrolledRating /> */}
      {/* <Rating value={ratingValue} onClick={setRatingValue}/>
      <UncontrolledRating/> */}

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
    </div>
  );
}

export default App;
