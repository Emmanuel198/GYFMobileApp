import React from 'react';
import PostsStep1 from '../views/posts/PostsStep1';
import PostsStep2 from '../views/posts/PostsStep2';

const PostRoutes = props => {
  const Stack = props.stack;
  return (
    <Stack.Group>
      <Stack.Screen
        name="Posts"
        component={PostsStep1}
        options={{}}
      />
      <Stack.Screen
        name="Comments"
        component={PostsStep2}
        options={{}}
      />
    </Stack.Group>
  );
};

export default PostRoutes;
