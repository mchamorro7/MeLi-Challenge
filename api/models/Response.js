class Response {
  author = {
    name: 'Mateo',
    lastname: 'Chamorro',
  };
  constructor() {}
}

class Price {
  currency;
  amount;
  decimals = 0;
  constructor(currency, amount) {
    const haveDecimals = amount % 1;
    if (haveDecimals !== 0) this.decimals = Math.round(haveDecimals * 10) / 10;
    this.currency = currency;
    this.amount = Math.round(amount);
  }
}

const conditionType = {
  new: 'Nuevo',
  not_specified: 'No especificado',
  used: 'Usado',
}

class ItemResponse extends Response {
  item;
  constructor(data) {
    super();
    const { id, title, currency_id, thumbnail, price, pictures, condition, shipping, sold_quantity, description, categories } = data;
    this.item = {
      id,
      title,
      categories,
      price: new Price(currency_id, price),
      ...(pictures[0] ? { picture: pictures[0].url } : { picture: thumbnail }),
      condition: conditionType[condition],
      free_shipping: shipping.free_shipping,
      sold_quantity,
      description,
    };
  }
}

class PartialItem {
  id;
  title;
  price;
  picture;
  condition;
  free_shipping;
  address;
  constructor(item) {
    const { id, title, currency_id, price, thumbnail, condition, shipping, address } = item;
    this.id = id;
    this.title = title;
    this.picture = thumbnail;
    this.condition = conditionType[condition];
    this.address = address.state_name,
    this.free_shipping = shipping.free_shipping;
    this.price = new Price(currency_id, price);
  }
}

class ItemsResponse extends Response {
  categories = [];
  items = [];
  constructor(categories, items) {
    super();
    this.categories = categories;
    this.items = items.map(item => new PartialItem(item));
  }
}

module.exports = { ItemsResponse, ItemResponse };
