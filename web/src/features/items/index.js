import React from 'react';
import { useLocation } from 'react-router';
import { items as apiItems } from '../../api';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import Loading from '../../common/Loading/Loading';
import ListItem from './ListItem/ListItem';
import './index.scss';

const Results = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const searchValue = params.get('search');

  React.useEffect(() => {
    const getItems = async () => {
      try {
        setLoading(true);
        const { data } = await apiItems.getItems(searchValue);
        setData(data);
        console.log(data);
      } catch (error) {
        console.log('getItems#Results', error);
      } finally {
        setLoading(false);
      }
    };
    if (searchValue) getItems();
  }, [searchValue]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Breadcrumbs categories={data.categories} />
      <div className="results container column">
        {data.items?.map(item => (
          <ListItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Results;
