const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '9dcd76486224fbfa9f7ce5d15010c0af',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;