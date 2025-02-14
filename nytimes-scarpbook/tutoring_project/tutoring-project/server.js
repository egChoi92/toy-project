const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { page, filter } = req.query;
  const perPage = 8;
  const posts = router.db.get("topics").value();
  const filteredPosts = posts.filter(post => {
    return post.grade === filter;
  })

  if (page) {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
    return res.status(200).json(paginatedPosts);
  } else {
    return res.status(200).json(filteredPosts);
  }

});

server.use(middlewares);
server.use(router);

server.listen(4000, () => {
  console.log(`JSON Server is running`);
});
