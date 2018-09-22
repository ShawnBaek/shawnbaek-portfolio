import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import PostsListPage from './pages/PostsListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

export default [
    {
      ...App,
      routes: [
        {
          ...HomePage,
          path: '/',
          exact: true
        },
        {
          ...AdminsListPage,
          path: '/admins'
        },
        {
          ...PostsListPage,
          path: '/postsList'
        },
        {
          ...NotFoundPage
        }
      ]
    }
];