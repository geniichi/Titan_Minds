import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Shared/Footer/Footer.js';
import Header from './Shared/Header/Header.js';
import { Routes, Route } from 'react-router-dom';
import Bookspage from './Components/Bookspage/Bookspage.js';
import Contactpage from './Components/Contactpage/Contactpage.js';
import Homepage from './Components/Homepage/Homepage.js';
import Shoppage from './Components/Shop/Shoppage.js';
import Login from './Components/auth/Login';
import SignUp from './Components/auth/SignUp';
import Book from './Components/Bookspage/Book';
import Cart from './Components/Shop/cart';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  //fetch data from port 5000
  useEffect(() => {
    fetch("/api")
    .then(response => response.json())
    .then((data) => {
      setIsLoading(false)
      setBooks(data)
    })
    .catch((error) => {
      console.error('Error fetching books:', error);
      setIsLoading(false)
    });
  }, []);

  //popularity sorter
  const SortedByPopularityBooks = [];
  for (const genre in books) {
    books[genre].forEach(book => {
      SortedByPopularityBooks.push(book);
    });
  }
  SortedByPopularityBooks.sort((a, b) => a.popularity - b.popularity);

  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header userEmail={userEmail}/>
      <Routes>
        <Route path='/' element={<Homepage SortedByPopularityBooks={SortedByPopularityBooks}/>}/>
        <Route path='/books' element={<Bookspage books={books} isLoading={isLoading}/>}/>
        <Route path='/books/:id' element={<Book books={books} isLoading={isLoading}/>} />
        <Route path='/contact' element={<Contactpage/>}/>
        <Route path='/shop' element={<Shoppage SortedByPopularityBooks={SortedByPopularityBooks} setCart={setCart} cart={cart}/>}/>
        <Route path='/cart' element={<Cart cart={cart}/>}/>
        <Route path='/login' element={<Login setUserEmail={setUserEmail}/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
