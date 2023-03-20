const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "head" }, "Hello Boy"),
    React.createElement("h1", { id: "head" }, "Hello Boy"),
    React.createElement("h1", { id: "head" }, "Hello Boy")]
  ),
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "head" }, "Hello Boy"),
    React.createElement("h1", { id: "head" }, "Hello Boy"),
    React.createElement("h1", { id: "head" }, "Hello Boy")]
  )]
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
