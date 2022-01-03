
function filterProducts(category, body, res) {
  let { filterName, filterParam } = body;

  let filteredProducts;

  if (filterName === "price" || "liked") {
    if (filterParam === "lower" || filterParam === "unpopular") {
      filteredProducts = [...category].sort((a, b) => a.price - b.price);
    } else if (filterParam === "expensive" || filterParam === "popular") {
      filteredProducts = [...category]
        .sort((a, b) => a.price - b.price)
        .reverse();
    }

    console.log(filteredProducts);

    res.status(200);
    res.send(filteredProducts);
  }
}

module.exports = filterProducts;
