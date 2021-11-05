import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import routes from './routes';
import SearchBar from './common/SearchBar/SearchBar';

export const SearchContext = React.createContext({ search: '', setSearch: () => {} });

function App() {
  const [search, setSearch] = React.useState({ search: '' });
  const searchContextValue = React.useMemo(() => {
    return { search, setSearch };
  }, [search, setSearch]);

  return (
    <div>
      <SearchContext.Provider value={searchContextValue}>
        <Suspense fallback={<p>Loading...</p>}>
          <Router>
            <SearchBar />
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
