import React from 'react';
import { useHistory } from 'react-router';
import logo from '../../assets/img/Logo_ML.png';
import searchIcon from '../../assets/img/ic_Search.png';
import { SearchContext } from '../../App';
import './SearchBar.scss';

const SearchBar = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const { setSearch } = React.useContext(SearchContext);
  const history = useHistory();

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const submitSearch = () => {
    setSearch(searchValue);
    history.push({
      pathname: '/blogs',
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
        <img className="logo" src={logo} alt="Mercado libre" />
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
