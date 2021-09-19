import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const Home = () => {

    const [ isOpen, setIsOpen] = useState(false);

    // Toggle method for opening and closing sidebar
    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </>
    );
};


export default Home;