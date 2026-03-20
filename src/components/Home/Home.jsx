import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Books from '../pages/Books/Books';

const Home = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(()=>{
        fetch("booksData.json")
        .then(res=>res.json())
        .then(data => {
         setAllBooks(data);
        })
    },[])

    return (
        <div>
         <Banner></Banner>
         <Books></Books>
        </div>
    );
};

export default Home;