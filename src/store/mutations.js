const mutations = {
  setStatus(state, status) {
    state.status = status;
  },
  setCart(state, cart) {
    state.cart = cart;
  },
  LOGIN(state, user) {
    state.user = user;
  },
};

export default mutations;
