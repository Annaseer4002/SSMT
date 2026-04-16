export default function Enrty(whatever) {
  console.log(whatever);
  
   return (
          <article className="entry">
            <div className="entry-image-container">
                  <img className="entry-image" src={whatever.img.src} alt={whatever.img.alt} />
            </div>
            
            <div className="entry-info">
              <div className="entry-location-row">
                <img src={whatever.locationImg} alt={whatever.locationAlt} />
                <span className="country">{whatever.country}</span>
                <a href={whatever.googleMapsLink} target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </div>

                <h2>{whatever.title}</h2>
                <p>{whatever.dates}</p>
                <p>{whatever.text}</p>
            </div>
            
          </article>
   )
}