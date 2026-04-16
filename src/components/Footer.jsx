export default function Footer () {
  return (
    <>
    <footer>
          <small>@Mama`s soldier 2026</small>
       </footer>
    </>
  )
}


const names = ["alice", "bob", "charlie", "danielle"]

const capitalizedNames = names.map((name)=> {
  return name[0].toUpperCase() + name.slice(1)
})
console.log(capitalizedNames);

const paragraph = names.map(name => {
  return `<p>${name}</p>`
})
console.log(paragraph);

