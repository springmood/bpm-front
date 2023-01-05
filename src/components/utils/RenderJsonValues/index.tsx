export function RenderJsonValues({ children }) {
  return (
    <pre style={{ textAlign: "left", direction: "ltr" }}>
      {JSON.stringify(children, null, 2)}
    </pre>
  );
}
