export type ExampleProps = {
  title: string;
};

export default function Example(props: ExampleProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        background: "lightblue",
      }}
    >
      <h1>{props.title}</h1>
    </div>
  );
}
