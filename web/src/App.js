import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import routes from './routes';
import SearchBar from './common/SearchBar/SearchBar';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
