playlist = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios.get(url, {
      headers: {Authorization: "Eduardo-Moraes-Maryam"}
    }).then((res)=>{
      const nomes = res.data.result.list.map((nome)=>{
        return nome.name
      })
      console.log(nomes)
    }).catch((err)=>{
      console.log(err)
    })

  }