

const getapi = () => {
    const name = document.getElementById(`name`).value
    const url = `http://localhost:5000/api?name=${name}`
    fetch(url) 
    console.log(url)
    .then(res => { return res.json()})
    .then ((data) => {
    document.getElementById(`personajes`).innerHTML += `<h1>${data.name}</h1>`
        
    })
}        


