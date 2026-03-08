export default function TravelHeader() {

     const hours = new Date().getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else if (hours < 21) {
    timeOfDay = "evening"
  } else {
    timeOfDay = "night"
  }
    return (
        <>

        <header className="travel-header">
            <img src="/src/assets/pngegg (10).png" alt="travel logo" />
            <h1>Good {timeOfDay}! Reserve now, travel stress-free.</h1>
        </header>
        
        </>
    )
}