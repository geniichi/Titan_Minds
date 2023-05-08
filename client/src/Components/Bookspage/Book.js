import './Book.css'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Book = ({ books, isLoading }) => {
  const { id } = useParams();

  // combine the arrays into a single array
  const combinedArray = Object.values(books).flat();

  const selBook = combinedArray.find((book) => book.id === parseInt(id));

  return (
    <div id="Books-book-main-container" className='row d-flex'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='col-4 container'>
            <div id="Books-book-imgContainer">
              <img src={selBook.imageURL} alt={selBook.title} />
            </div>
          </div>

          <div className='container col-7'>
            <h2 id="Books-book-title" className='mb-5'>{selBook.title}</h2>
            <p id="Books-book-description" className='pt-5'>{selBook.description}</p>
            <Link to='/books' className='btn btn-outline-info'>Go Back</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Book;
