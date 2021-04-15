import { render } from "preact";
import { useEffect, useReducer } from "preact/hooks";
import { useDarkMode } from "./useDarkMode";
// import "tailwindcss/tailwind.css"; // TODO - Get this to work instead of using style.css
import "../style.css";
import { Header } from "./Header";
import { Listing } from "./Listing";

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};

const useFetch = (url, requestOptions, initialData) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    loading: false,
    error: false,
    data: initialData,
  });

  useEffect(() => {
    let isMounted = true;
    dispatch({ type: "FETCH_INIT" });

    fetch(url, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          return Promise.resolve(response.json());
        }
        return Promise.reject(new Error(response.statusText));
      })
      .then((data) => {
        isMounted && dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((error) => {
        console.error("Request failed: ", error);
        isMounted && dispatch({ type: "FETCH_FAILURE" });
      });

    return () => {
      isMounted = false;
    };
  }, [url, requestOptions]);

  return [state];
};

const Popup = () => {
  useDarkMode();

  const [{ data, loading, error }] = useFetch(
    `${process.env.API_URL}/Listings/oneDollar.json?photo_size=Gallery`,
    {
      method: "get",
      headers: {
        Authorization: `OAuth oauth_consumer_key=${process.env.OAUTH_CONSUMER_KEY}, oauth_signature_method=PLAINTEXT, oauth_signature=${process.env.OAUTH_SIGNATURE}&`,
      },
    },
    { List: [] }
  );

  return (
    <div class="popup-container bg-gray-50 antialiased text-gray-900">
      <Header />
      {error && (
        <div class="flex flex-col justify-center items-center w-full h-full">
          <span>Something went wrong :(</span>
        </div>
      )}
      {loading ? (
        <div class="flex flex-col justify-center items-center w-full h-full">
          <span>Loading...</span>
        </div>
      ) : (
        <div class="grid grid-cols-3 gap-2 p-2">
          {data.List.map((listing) => (
            <Listing listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  render(<Popup />, document.body);
});
