export const getGifs = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=Wv4yr5OXKVpUZ3WWJLls2U9MIMQP4mX4`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title || '<Title not found>',
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

};