const heading = 
[React.createElement("div",{id:"parent"}, React.createElement("div",{id:"children"}, React.createElement("h1",{id:"heading", xyz:"ddd"}, "Hello world"))),
React.createElement("div",{id:"parent"}, React.createElement("div",{id:"children"}, React.createElement("h1",{id:"heading", xyz:"ddd"}, "Hello world")))]


console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("Root"));

root.render(heading);