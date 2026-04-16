export default function Joke(props) {
    return (
        <>
         <div>
            <h2>{props.setup}</h2>
            <p>{props.punchline}</p>
         </div>
        </>
         
    )
}

