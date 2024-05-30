/*
fetch("www.google.com")
  .then((response) => response.json())
  .then((json) => console.log(json));
*/

async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const produtos = fetchProdutos("www.google.com");

console.log(produtos);
