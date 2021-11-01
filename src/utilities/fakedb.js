// use local storage as your db for now
const addToDb = id => {
  const exists = getDb();
  let booking_cart = {};
  if (!exists) {
    booking_cart[id] = 1;
  }
  else {
    booking_cart = JSON.parse(exists);
    if (booking_cart[id]) {
      const newCount = booking_cart[id] + 1;
      booking_cart[id] = newCount;
    }
    else {
      booking_cart[id] = 1;
    }
  }
  updateDb(booking_cart);
}

const getDb = () => localStorage.getItem('booking_cart');
const updateDb = cart => {
  localStorage.setItem('booking_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const booking_cart = JSON.parse(exists);
    delete booking_cart[id];
    updateDb(booking_cart);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
  localStorage.removeItem('booking_cart');
}

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }
