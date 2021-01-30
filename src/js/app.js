import { h, render, Component } from "preact";
// import "tailwindcss/tailwind.css"; // TODO - Get this to work instead of using style.css
import "../style.css";

let Header = () => {
  return (
    <header class="h-24 bg-blue-200">This is header by Preact</header>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  render(<Header />, document.body);
});