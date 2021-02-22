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
    <div class="border border-gray-400 flex flex-row rounded">
      <img src={listing.PictureHref}/>
      <div class="p-2 flex flex-col">
        <div class="flex-grow">
          <h2 class="text-base font-semibold leading-tight">{listing.Title}</h2>
          <span class="font-medium">{listing.PriceDisplay} | {formatDate(listing.EndDate)}</span>
        </div>
        
        <button class="bg-primary text-white text-base rounded p-1" type="button" onClick={() => handleClick(listing.ListingId)}>View Listing</button>
      </div>
    </div>
  );
}