import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from './utils/routes';

import { FilterProvider } from './provider/FilterContext';

import Landing from './pages/Landing';
import BrowseRentals from './pages/BrowseRentals';

function App() {
  return (
    <Switch>
      <FilterProvider>
        <Route path={Routes.LandingPage} component={Landing} exact />
        <Route path={Routes.BrowseRentals} component={BrowseRentals} />
      </FilterProvider>
    </Switch>
  );
}

export default App;
