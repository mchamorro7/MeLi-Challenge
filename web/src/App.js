import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import routes from './routes';
import SearchBar from './common/SearchBar/SearchBar';
import Loading from './common/Loading/Loading';
import logo from './assets/img/Logo_ML.png';
import searchIcon from './assets/img/ic_Search.png';

const { search } = window.location;
const params = new URLSearchParams(search);
const value = params.get('search');

const loadingComponent = Loading();
const searchBarComponent = (
  <div className="searchbar-container">
    <div className="container row">
      <img className="logo" src={logo} alt="Mercado libre" />
      <div className="searchbar-input-container">
        <input className="searchbar-input" placeholder="Nunca dejes de buscar" value={value ?? ''} readOnly />
        <button className="searchbar-button">
          <img src={searchIcon} alt="Buscar" />
        </button>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <>
            {loadingComponent}
            {searchBarComponent}
          </>
        }>
        <Router>
          <SearchBar />
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
