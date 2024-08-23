var url = 'https://rickandmortyapi.com/api/character';

fetch(url,{
    method: "GET",
    body:JSON.stringify(),
    headers:{
        "content-Type": "application/json",
    }
})

    .then((res) => res.json())
    .catch((error) => console.error("Error", error))
    .then((response) => console.log("Success:", response));