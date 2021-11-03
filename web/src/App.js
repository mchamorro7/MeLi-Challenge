import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Loading from './common/Loading';
import SearchBar from './common/SearchBar';
import routes from './routes';

const SearchContext = React.createContext({ search: '', setSearch: () => {} });

function App() {
  const [search, setSearch] = React.useState({ search: '' });
  const searchContextValue = React.useMemo(() => {
    return { search, setSearch };
  }, [search, setSearch]);

  return (
    <div>
      <SearchContext.Provider value={searchContextValue}>
        <SearchBar />
        <Suspense fallback={Loading}>
          <Router>
            <Switch>
              {routes.map((route, index) => (
                <Route key={index} {...route} />
              ))}
            </Switch>
          </Router>
        </Suspense>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
