import Joke from "./joke entry";
import jokesData from "../components/jokeData.js"

export default function Jokes() {

    const jokeElements = jokesData.map((joke) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
       <main>
           {jokeElements}
       </main>
    )
}