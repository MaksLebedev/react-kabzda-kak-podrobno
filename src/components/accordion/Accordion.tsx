type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onClick: (collapsed: boolean) => void;
};

export function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering");

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClick={props.onClick}
        collapsed={props.collapsed}
      />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onClick: (collapsed: boolean) => void;
  collapsed: boolean;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");

  return (
    <h3
      onClick={() => {
        props.onClick(props.collapsed);
      }}
    >
      {props.title}
    </h3>
  );
}

function AccordionBody() {
  console.log("AccordionBody rendering");

  return (
    <>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </>
  );
}
