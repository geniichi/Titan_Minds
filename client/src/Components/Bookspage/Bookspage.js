import './Bookspage.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Books = ({ books, isLoading }) => {

  const [search, setSearch] = useState("");

  const combinedArray = Object.values(books).flat();
  const filteredBooks = combinedArray.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const preventDef = (e) => {
    e.preventDefault();
  }

  return (
    <main>
      <h1 className="text-center text-uppercase text-info display-0 mt-4 mb-4">Search for your favorite Books!</h1>
      <form className="form-inline d-flex justify-content-around container mb-5 mt-1 container" id="booksPage-form" onSubmit={preventDef}>
        <input
          className="form-control mr-sm-0 shadow-none col-8 col-md-10"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button className="btn btn-outline-info my-2 my-sm-0 shadow-none" type="submit">Search</button>
      </form>
      {search.length === 0 ? (
        <main>
          <h1 className="books-main-titles text-break">Action</h1>
          <div className="books-main-container">
            {typeof books.Action === "undefined" ? (
              <p>Loading...</p>
            ) : (
              books.Action.map((book, i) => (
              <Link to={`/books/${book.id}`} key={book.id} id="book-container">
                <div key={book.id} style={{backgroundImage: `url(${book.imageURL})`}}>
                  <div>
                    <h5>{book.title.length > 25 ? book.title.slice(0, 25) + '...' : book.title}</h5>
                    <p>{book.description.slice(0,55)}...</p>
                  </div>
                </div>
              </Link>
              ))
            )}
          </div>

          <h1 className="books-main-titles text-break">Thriller</h1>
          <div className="books-main-container">
            {typeof books.Thriller === "undefined" ? (
              <p>Loading...</p>
            ) : (
              books.Thriller.map((book, i) => (
                <Link to={`/books/${book.id}`} key={book.id} id="book-container">
                  <div key={book.id} style={{backgroundImage: `url(${book.imageURL})`}}>
                    <div>
                      <h5>{book.title.length > 25 ? book.title.slice(0, 25) + '...' : book.title}</h5>
                      <p>{book.description.slice(0,55)}...</p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          <h1 className="books-main-titles text-break">Children's Books</h1>
          <div className="books-main-container">
            {typeof books.Childrens_Books === "undefined" ? (
              <p>Loading...</p>
            ) : (
              books.Childrens_Books.map((book, i) => (
                <Link to={`/books/${book.id}`} key={book.id} id="book-container">
                  <div key={book.id} style={{backgroundImage: `url(${book.imageURL})`}}>
                    <div>
                      <h5>{book.title.length > 25 ? book.title.slice(0, 25) + '...' : book.title}</h5>
                      <p>{book.description.slice(0,55)}...</p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          <h1 className="books-main-titles text-break">Biography</h1>
          <div className="books-main-container">
            {typeof books.Biography === "undefined" ? (
              <p>Loading...</p>
            ) : (
              books.Biography.map((book, i) => (
                <Link to={`/books/${book.id}`} key={book.id} id="book-container">
                  <div key={book.id} style={{backgroundImage: `url(${book.imageURL})`}}>
                    <div>
                      <h5>{book.title.length > 25 ? book.title.slice(0, 25) + '...' : book.title}</h5>
                      <p>{book.description.slice(0,55)}...</p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          <h1 className="books-main-titles text-break">Fantasy</h1>
          <div className="books-main-container">
            {typeof books.Fantasy === "undefined" ? (
              <p>Loading...</p>
            ) : (
              books.Fantasy.map((book, i) => (
                <Link to={`/books/${book.id}`} key={book.id} id="book-container">
                  <div key={book.id} style={{backgroundImage: `url(${book.imageURL})`}}>
                    <div>
                      <h5>{book.title.length > 25 ? book.title.slice(0, 25) + '...' : book.title}</h5>
                      <p>{book.description.slice(0,55)}...</p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          <h1 className="books-main-titles text-break">Novels</h1>
          <div className="books-main-container">
            {typeof books.Novels === "undefined" ? (
              <p>Loading...</p>
            ) : (
              books.Novels.map((book, i) => (
                <Link to={`/books/${book.id}`} key={book.id} id="book-container">
                  <div key={book.id} style={{backgroundImage: `url(${book.imageURL})`}}>
                    <div>
                      <h5>{book.title.length > 25 ? book.title.slice(0, 25) + '...' : book.title}</h5>
                      <p>{book.description.slice(0,55)}...</p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          <h1 className="books-main-titles text-break">Documentaries</h1>
          <div className="books-main-container">
            {typeof books.Documentaries === "undefined" ? (
              <p>Loading...</p>
            ) : (
              books.Documentaries.map((book, i) => (
                <Link to={`/books/${book.id}`} key={book.id} id="book-container">
                  <div key={book.id} style={{backgroundImage: `url(${book.imageURL})`}}>
                    <div>
                      <h5>{book.title.length > 25 ? book.title.slice(0, 25) + '...' : book.title}</h5>
                      <p>{book.description.slice(0,55)}...</p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </main>
      ) : (
        <div>
          <h5 className='text-muted ms-5'>Search results for "{search}"</h5>
          {filteredBooks.length > 0 ? (
            <div className="books-main-container">
              {filteredBooks.map((book, i) => (
                <Link to={`/books/${book.id}`} key={book.id} id="book-container">
                  <div key={book.id} style={{backgroundImage: `url(${book.imageURL})`}}>
                    <div>
                      <h5>{book.title.length > 25 ? book.title.slice(0, 25) + '...' : book.title}</h5>
                      <p>{book.description.slice(0,55)}...</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p>No search results found.</p>
          )}
        </div>
      )}
    </main>
  );
}

export default Books;
