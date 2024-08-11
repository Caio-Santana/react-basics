// --- named export ----
export function FirstComponent() {
  return <h1>First Component</h1>;
}

export function SecondComponent() {
  return <h1>Second Component</h1>;
}

export default function MyComponent() {
    return <h1>My default component</h1>
}

// --- default export ---- only 1 component default per file
// function FirstComponent() {
//   return <h1>First Component</h1>;
// }

// export default FirstComponent;
