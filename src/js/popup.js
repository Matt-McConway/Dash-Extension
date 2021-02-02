import { render } from "preact";
// import "tailwindcss/tailwind.css"; // TODO - Get this to work instead of using style.css
import "../style.css";

let Popup = () => {
  return (
    <div class="popup-container bg-gray-50">This is the popup</div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  render(<Popup />, document.body);
});