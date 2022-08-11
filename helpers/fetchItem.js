const fetchItem = async (param) => {
  try {
    const url = await fetch(`https://api.mercadolibre.com/items/${param}`);
    const resultado = await url.json();
    return resultado;
  } catch (error) {
    throw new Error('you must provide an url', error.message);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
