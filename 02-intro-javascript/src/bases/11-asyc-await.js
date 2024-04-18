const getImagen = async () => {
    try {
        const apiKey = 'sc4ID4JL5jKxQmbcDLhiTBF7PSBykJdZ';

        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const resp = await peticion.json();
        const {data} = resp;
        const {url} = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);
        console.log(url);
    } catch (error) {
        // manejo del error
        console.log(error);
    }
    
}

getImagen()