import './PopSectSM.css'

const PopSectSM = ({ SortedByPopularityBooks }) => {

  // Check if SortedByPopularityBooks is empty
  if (SortedByPopularityBooks.length === 0) {
    return <div>No books found</div>;
  }

  const firstBook = SortedByPopularityBooks && SortedByPopularityBooks.length > 0 ? SortedByPopularityBooks[0] : null;

  const booksWithoutFirst = SortedByPopularityBooks.slice(1);

  return (
    <>
    <h1 id="popular-books-section-title-sm">TOP BOOKS</h1>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active PopSectSM-main"style={{backgroundImage: `url(${firstBook.imageURL})`}}>
          <div>
              <h5>{firstBook.title}</h5>
              <p>{firstBook.description}</p>
          </div>
        </div>
        {booksWithoutFirst.slice(0,8).map(book => (
          <div key={book.id} style={{backgroundImage: `url(${book.imageURL})`}} className="carousel-item PopSectSM-main">
            <div>
              <h5>{book.title}</h5>
              <p>{book.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </>

  )
}

export default PopSectSM;
