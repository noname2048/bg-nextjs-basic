const API_KEY = process.env.SECRET_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&region=KR`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}&language=ko-KR&region=KR`,
      },
    ];
  },
};
