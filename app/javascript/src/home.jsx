import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import Feeds from './feeds';
import './home.scss';

const Home = () => (
    <Layout>
       <Feeds />     
    </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),    
  )
})