require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função;', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    fetchProducts('computador');
    await expect(fetch).toBeCalled();
  })
  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint', async () => {
    fetchProducts('computador')
    await expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const funcao = await fetchProducts('computador');
    expect(funcao).toEqual(computadorSearch);
  })
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url".', async () => {
    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('you must provide an url'));
    }
  })
});
