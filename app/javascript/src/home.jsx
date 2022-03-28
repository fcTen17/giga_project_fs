import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './home.scss';

const Home = () => (
    <Layout>
       <h1>HELLOQ!!!!</h1>
    </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),    
  )
})