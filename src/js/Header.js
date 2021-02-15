import "../style.css";

export const Header = () => {
  
  const handleClick = () => {
    window.open("https://www.trademe.co.nz/", "_blank");
  }

  return (
    <header class="h-10 flex flex-row items-stretch justify-between bg-gray-200">
      <h1 class="flex-grow-6 inline-block text-2xl self-center pl-2">Welcome to Dash</h1>
      <button class="flex-grow-3 bg-primary text-white text-base" type="button" onClick={handleClick}>Go to Trade Me</button>
    </header>
  );
}