import React from 'react';
import './ListItem.scss';
import freeShippingIcon from '../../../assets/img/ic_shipping@2x.png.png';
import { Link } from 'react-router-dom';

const ListItem = ({ title, price, picture, id, free_shipping, address }) => {
  return (
    <Link to={`/items/${id}`} className="link-wrapper">
      <div className="list-item-container">
        <div className="list-item-image" style={{ backgroundImage: `url(${picture})` }}></div>
        <div className="list-item-content">
          <div className="list-item-header">
            <div className="list-item-price">
              <p className="m-0">$ {price.amount}</p>
              {free_shipping && <img className="free-shipping-icon" src={freeShippingIcon} alt="Envio gratis" />}
            </div>
            <div className="list-item-location">
              <p className="m-0">{address}</p>
            </div>
          </div>
          <div className="list-item-title">
            <p className="m-0">{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
