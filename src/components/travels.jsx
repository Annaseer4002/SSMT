import Entry from "./travel entry.jsx"

import data from "./data.js"


export default function Travels() {

  const travelElements = data.map((data) => {
    return (
      <Entry
      key={data.id}
      // entry={data} the add use props.entry.cuntry, title, etc in the entry component
      {...data}
      />
    )
  })
    


    return (
    <main >
      {travelElements}
    </main>
  )


  }
  



  
    // return (
    //       <div>
    //  <Entry
    //    img={image} 
    //    locationImg="/src/assets/location.webp"
    //    name="Sokoto to Abuja"
    //    link="https://github.com/Annaseer4002"
    //    date="12th september, 2026"
    //    info="Experience the convenience of booking your bus ticket from sokoto"
        
    //  />
    //  <Entry
    //  img="/src/assets/image.png" 
    //    locationImg="/src/assets/location.webp"
    //    name="Sokoto to Lagos"
    //    link="https://github.com/Annaseer4002"
    //    date="20th october, 2026"
    //    info="Experience the convenience of booking your bus ticket from sokoto"
    //  />
    //  <Entry
    //  img="/src/assets/bus (2).jpg" 
    //    locationImg="/src/assets/location.webp"
    //    name="Sokoto to Zamfara"
    //    link="https://github.com/Annaseer4002"
    //    date="12th september, 2026"
    //    info="Experience the convenience of booking your bus ticket from sokoto"
    //  />
    // </div>
    // )
   
