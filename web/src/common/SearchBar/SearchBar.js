import React from 'react';
import { useHistory, useLocation } from 'react-router';
import logo from '../../assets/img/Logo_ML.png';
import searchIcon from '../../assets/img/ic_Search.png';
import './SearchBar.scss';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const value = params.get('search');
  const [searchValue, setSearchValue] = React.useState(value);
  const history = useHistory();

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const submitSearch = () => {
    history.push({
      pathname: '/items',
      search: `?search=${searchValue}`,
    });
  };

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      submitSearch();
    }
  };

  return (
    <div className="searchbar-container">
      <div className="container row">
        <Link to="/">
          <img className="logo" src={logo} alt="Mercado libre" />
        </Link>
        <div className="searchbar-input-container">
          <input
            className="searchbar-input"
            placeholder="Nunca dejes de buscar"
            value={searchValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button className="searchbar-button" onClick={submitSearch}>
            <img src={searchIcon} alt="Buscar" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
