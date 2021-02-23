import "../style.css";

export const Listing = (props) => {
  const { listing } = props;

  const handleClick= (listingId) => {
    window.open(`${process.env.BASE_URL}/${listingId}`, "_blank");
  };

  const formatDate = (unixDateString) => {
    const now = new Date();
    const diff = unixDateString.replace(/([^\d])+/g,'') - Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDay(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
    const hrs = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor(((diff % 86400000) % 3600000) / 60000);
    // const secs = ((diff % 86400000) % 3600000) / (60000 * 3600); // Could add seconds later, but might not be that useful
    return hrs !== 0 ?`${hrs}h ${mins}m` : `${mins}m`;
  }

  return (
    <div class="border border-gray-300 rounded">
      <div class="relative bg-gray-300 pb-2/3">
        {listing.PictureHref ? 
          <img class="absolute h-full w-full object-cover" src={listing.PictureHref}/> : 
          <svg class="absolute h-full w-full text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        }
      </div>
      <div class="p-2 flex flex-col">
        <div class="flex-grow">
          <h2 class="text-base font-semibold leading-tight truncate">{listing.Title}</h2>
          <span class="font-medium text-gray-600">{listing.PriceDisplay} | {formatDate(listing.EndDate)}</span>
        </div>
        <button class="bg-primary text-white text-base rounded p-1" type="button" onClick={() => handleClick(listing.ListingId)}>View Listing</button>
      </div>
    </div>
  );
}