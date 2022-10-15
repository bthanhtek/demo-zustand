export const addToCart = (cart, product) => {
  const isExitingItem = [...cart].find((item) => item.id === product.id);

  if (isExitingItem) {
    return [...cart].map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cart, { ...product, quantity: 1 }];
};

export const editItemToCart = (cart, product) => {
  const isExitingItem = [...cart].find((item) => item.id === product.id);

  if (isExitingItem) {
    return [...cart].map((item) =>
      item.id === isExitingItem.id ? product : item
    );
  }
};
