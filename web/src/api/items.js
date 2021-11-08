import api from './api';

const requests = {
  getItems: function (q) {
    return api.get('/items', { params: { q: encodeURIComponent(q) } });
  },
  getItem: function (id) {
    return api.get(`/items/${id}`);
  },
};

export default requests;
