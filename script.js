const itensAmostra = document.querySelector('.items');
const itensCarrinho = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const btn = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  btn.addEventListener('click', async () => {
    const results = await fetchItem(sku);
    const { id, title, price } = results;
    const itens = createCartItemElement({ sku: id, name: title, salePrice: price });
    itensCarrinho.appendChild(itens);
  });
  section.appendChild(btn);
  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const objetoCorrect = async (param) => {
  const { results } = await fetchProducts(param);
  results.forEach(({ id, title, thumbnail }) => {
    const itens = createProductItemElement({ sku: id, name: title, image: thumbnail });
    itensAmostra.appendChild(itens);
  });
};

window.onload = async () => {
  await objetoCorrect('computador');
};
