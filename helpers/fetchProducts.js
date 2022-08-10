const fetchProducts = async (param) => {
  try {
    const url = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${param}`);
    const resultado = await url.json();
    return resultado;
  } catch (error) {
    throw new Error('you must provide an url', error.message);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
