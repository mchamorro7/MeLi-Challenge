const apiClient = require('../client');
const { ItemsResponse, ItemResponse } = require('../models/Response');

var itemController = {
  getItem: function ({ params }, res) {
    if (!params.id) return res.status(404).send({ message: 'You must provide a item id' });
    return Promise.all([apiClient.get(`/items/${params.id}`), apiClient.get(`/items/${params.id}/description`)])
      .then(([{ data: itemData }, { data: descriptionData }]) => {
        const plainText = descriptionData.plain_text;
        const response = Object.assign(new ItemResponse({ ...itemData, ...{ description: plainText } }), {});
        res.status(200).send(response);
      })
      .catch(error => res.status(404).send({ error }));
  },
  getItems: function ({ query }, res) {
    return apiClient
      .get('/sites/MLA/search', { params: { q: query.search } })
      .then(({ data: { results, filters } }) => {
        const { values: filterValue } = filters.find(filter => filter.id === 'category');
        const categoriesFromSearch = filterValue[0].path_from_root || [];
        const parsedCategories = categoriesFromSearch.map(cat => cat.name);
        const response = Object.assign(new ItemsResponse(parsedCategories, results), {});
        res.status(200).send(response);
      })
      .catch(error => res.status(404).send({ error }));
  },
};

module.exports = itemController;
