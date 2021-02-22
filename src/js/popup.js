import { render } from "preact";
import { useEffect, useState } from 'preact/hooks';
// import "tailwindcss/tailwind.css"; // TODO - Get this to work instead of using style.css
import "../style.css";
import { Header } from "./Header";
import { Listing } from "./Listing";

const useOneDollarApi = (initialState) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

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
      setError(true);
    });
    return () => {
      setData(initialState);
      setLoading(false);
      setError(false);
    }
  }, []);

  return [{data, loading, error}];
}

const Popup = () => {
  
  const [{data, loading, error}] = useOneDollarApi({List: []});

  return (
    <div class="popup-container bg-gray-50 antialiased text-gray-900">
      <Header />
      {error && <div class="flex flex-col justify-center items-center w-full h-full"><span>Something went wrong :(</span></div>}
      {loading ? <div class="flex flex-col justify-center items-center w-full h-full"><span>Loading...</span></div> : <div class="grid grid-cols-3 gap-2 p-2">
        {data.List.map(listing => <Listing listing={listing}/>)}
      </div>}
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  render(<Popup />, document.body);
});