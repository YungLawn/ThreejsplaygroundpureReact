import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Layout from './components/layouts/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Layout>
      <App/>
    </Layout>
    

);

