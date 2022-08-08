import React from 'react';
import CardExpandView from './CardExpandView';

const PostsStep2 = ({ route }) => {
    return <CardExpandView postId={route.params.option.id} />;
};

export default PostsStep2;
