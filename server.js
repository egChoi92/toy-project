const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { page } = req.query;
  const perPage = 5;
  const posts = router.db.get("topics").value();

  if (page) {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedPosts = posts.slice(startIndex, endIndex);
    console.log('paginatedPosts: ', paginatedPosts);
    return res.status(200).json(paginatedPosts);
  } else {
    return res.status(200).json(posts);
  }

});

server.use(middlewares);
server.use(router);

server.listen(4000, () => {
  console.log(`JSON Server is running`);
});
