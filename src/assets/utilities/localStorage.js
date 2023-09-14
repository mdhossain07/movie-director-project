const getStoredData = () => {
  const getStringified = localStorage.getItem("cart");
  if (getStringified) {
    return JSON.parse(getStringified);
  }
  return [];
};

const setDataToLS = (cart) => {
  const setStringified = JSON.stringify(cart);
  localStorage.setItem("cart", setStringified);
};

const addToLS = (id) => {
  const cart = getStoredData();
  cart.push(id);
  setDataToLS(cart);
};

export { addToLS, getStoredData };
