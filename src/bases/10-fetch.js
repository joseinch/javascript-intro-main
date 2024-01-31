const apiKey = 'wWLrYOzUlmisICbOaIjFytt6Za9TykSJ'
//https://api.giphy.com/v1/gifs/trending?api_key=wWLrYOzUlmisICbOaIjFytt6Za9TykSJ

fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(({ data }) => {
        
       const {url}=data[1].images.original
       const img=document.createElement('img')
       img.src=url
       document.body.append(img)
    })