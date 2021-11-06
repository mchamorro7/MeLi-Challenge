import api from './api';

const requests = {
  getItems: function (q) {
    return api.get('/items', { params: { q: encodeURIComponent(q) } });
  },
};

export default requests;
