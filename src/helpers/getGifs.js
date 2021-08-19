
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )  }&limit=10&api_key=qjAQK296iGn0J7HPkfhMMv6eGvEVr1IR`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.fixed_height.url
        }
    })

    return gifts;
   
}

