const resposta = async () => {
    const res = await fetch('https://lexicala1.p.rapidapi.com/search-definitions?text=apple&language=en', {
        method: "GET",
        headers: {
            "x-rapidapi-host" : "lexicala1.p.rapidapi.com",
            "x-rapidapi-key" : "831b8173d5msh28e4b67847e2cb1p1f9506jsne4a9051696e5"
        }
    })

    const retorno = await res.json()

    console.log(retorno)
}

resposta()