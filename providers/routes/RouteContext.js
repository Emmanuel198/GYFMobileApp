import React, {useContext} from 'react';

export const useRoutes = () => useContext(RouteContext);

const RouteContext = React.createContext({
  routes: {},
  setActiveRoute: () => {},
});

export default RouteContext;
