import React from 'react';
import { useParams } from 'react-router-dom';
import { items as apiItems } from '../../../api';
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs';
import Loading from '../../../common/Loading/Loading';
import './Detail.scss';

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [item, setItem] = React.useState();

  React.useEffect(() => {
    const getItem = async () => {
      try {
        setLoading(true);
        const {
          data: { item },
        } = await apiItems.getItem(id);
        setItem(item);
      } catch (error) {
        console.log('getItem#Detail', error);
      } finally {
        setLoading(false);
      }
    };
    if (id) getItem();
  }, [id]);

  const handleBuy = React.useCallback(() => {
    alert(`Comprando "${item.title}"`);
  }, [item]);

  return (
    <>
      {loading && <Loading />}
      {item && (
        <>
          <Breadcrumbs categories={item.categories} />
          <div className="detail container column">
            <div className="detail-header">
              <div className="detail-image-container">
                <div className="detail-image" style={{ backgroundImage: `url(${item.picture})` }}></div>
              </div>
              <div className="detail-pricing-container column">
                <span className="condition">{item.condition + ' - ' + item.sold_quantity + ' vendidos'}</span>
                <span className="title">{item.title}</span>
                <span className="price">
                  {item.price.currency} {item.price.amount}
                </span>
                <button className="submit-button" onClick={handleBuy}>
                  Comprar
                </button>
              </div>
            </div>
            <div className="column">
              <span className="description-title">Descripción del producto</span>
              <span className="description">{item.description}</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
