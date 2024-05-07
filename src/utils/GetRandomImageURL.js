async function getRandomImageURL() {
    const response = await fetch('https://source.unsplash.com/random/506x508');
    return response.url;
}

export default getRandomImageURL;