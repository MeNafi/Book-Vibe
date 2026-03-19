import React from 'react';
import Navbar from '../../Header/Navbar';
import Footer from '../../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer> 
        </div>
    );
};

export default Root;
