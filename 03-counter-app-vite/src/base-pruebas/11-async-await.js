

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );
export const getImagen = async() => {

    try {

        const apiKey = 'sc4ID4JL5jKxQmbcDLhiTBF7PSBykJdZquitar';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'No se encontró la imagen';
    }
    
    
    
}




