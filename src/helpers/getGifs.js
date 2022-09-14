export const getGifs = async (categori) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=cMxnwxHggxdThmFAlLkM9SdNVD5fAr7r&q=${categori}&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map(image => (
        {
            id: image.id,
            title: image.title,
            url: image.images.downsized_medium.url
        }
    ))

    return gifs
}