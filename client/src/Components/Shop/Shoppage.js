import './Shoppage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Shoppage = ({ SortedByPopularityBooks, setCart, cart }) => {

const [search, setSearch] = useState("");

const filteredBooks = SortedByPopularityBooks.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

const preventDef = (e) => {
    e.preventDefault();
  }

const handleAddToCart = (book) => {
    setCart([...cart, book]);
  }

    return (
    <main>
      <div id="shopPage-main-container">
        <h1 className='pt-5'>Browse unto your favorite Book!</h1>
        <form className="form-inline d-flex container mb-5 mt-1" onSubmit={preventDef}>
        <input
            className="form-control mr-sm-2 shadow-none col-9"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
        />
        <Link to="/cart"className="btn btn-outline-dark my-2 my-sm-0 shadow-none" type="submit">Go to Cart</Link>
        </form>
        <>
        <h2>Best Seller!</h2>
        <div className='container' id="bestSeller-container">
          {filteredBooks.slice(0,12).map(book => (
            <div
              key={book.id}
              style={{ backgroundImage: `url(${book.imageURL})` }}
              className="shopPage-description-container p-3"
              onClick={() => handleAddToCart(book)}
            >
                <div className='shopPage-hidden-description'>
                  <h4 className='text-dark'>{book.title}</h4>
                  <p className='text-dark'>{book.description.slice(0, 100)}..</p>
                </div>
              </div>
              ))}
          </div>
        </>
      </div>
    </main>
    )
    }

    export default Shoppage
