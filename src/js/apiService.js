const API = {
  imageFinder: async function (searchQuery, page) {
    const response = await fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=20359745-c6c2513bd1e372703e7d54807
`,
    );
    const data = await response.json();
    return data.hits;
  },
};

export default API;
