import React from 'react';
import '../App.css';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list'>
      {posts.map(post => (
        <li key={post.id} className='item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;