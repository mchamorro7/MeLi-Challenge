import api from './api';

export default {
    getItems: function (q) {
        return api.get('/items', {params: { q }});
    }
}