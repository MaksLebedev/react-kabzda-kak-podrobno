type PageTitlePropsType = {
  title: string;
};
export function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle rendering");
  return <h1>{props.title}</h1>;
}
