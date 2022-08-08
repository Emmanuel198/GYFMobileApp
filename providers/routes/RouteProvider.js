import React, { useState } from 'react';
import RouteContext from './RouteContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostsRoutes from '../../routes/PostsRoutes';

const Stack = createNativeStackNavigator();

const RouteProvider = () => {
  const routes = {
    posts: PostsRoutes({ stack: Stack }),
  };

  const [activeRoute, setActiveRoute] = useState(routes.posts);

  const value = {
    activeRoute,
    routes,
    setActiveRoute,
  };

  return (
    <RouteContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Posts">
          {PostsRoutes({ stack: Stack })}
        </Stack.Navigator>
      </NavigationContainer>
    </RouteContext.Provider>
  );
};

export default RouteProvider;
