import { render } from "preact";
import { useEffect, useState } from 'preact/hooks';
// import "tailwindcss/tailwind.css"; // TODO - Get this to work instead of using style.css
import "../style.css";
import { Header } from "./Header";
import { Listing } from "./Listing";

let Popup = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(`OAuth oauth_consumer_key=${process.env.OAUTH_CONSUMER_KEY}, oauth_signature_method=PLAINTEXT, oauth_signature=${process.env.OAUTH_SIGNATURE}&`)
    fetch(`${process.env.API_URL}/Listings/oneDollar.json?photo_size=Gallery`, {
      method: "get",
      headers: {
        "Authorization": `OAuth oauth_consumer_key=${process.env.OAUTH_CONSUMER_KEY}, oauth_signature_method=PLAINTEXT, oauth_signature=${process.env.OAUTH_SIGNATURE}&`
      }
    }).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.json());
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    }).then(data => {
      setData(data);
      setLoading(false);
    }).catch(error => {
      console.error("Request failed: ", error);
      setLoading(false);
    });
    return () => {setData(null)}
  }, []);

  return (
    <div class="popup-container bg-gray-50 antialiased text-gray-900">
      <Header />
      {loading && <div class="flex flex-col justify-center items-center w-full h-full"><span>Loading...</span></div>}
      {data && <div class="grid grid-cols-2 gap-2 p-2">
        {data.List.map(listing => <Listing listing={listing}/>)}
      </div>}
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  render(<Popup />, document.body);
});