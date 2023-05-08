import './PopSectLG.css'

const PopSectLG = ({SortedByPopularityBooks}) => {

  return (
    <div id="popular-books-section-main-lg">
      <h1 id="popular-books-section-title-lg">TOP BOOKS</h1>
      <div id="grid-top-books-lg">
        <div id="popular-books-section-lg">
          {SortedByPopularityBooks.slice(0,8).map(book => (
              <div key={book.id} style={{backgroundImage: `url(${book.imageURL})`}}>
                <div>
                  <h5>{book.title.length > 25 ? book.title.slice(0, 25) + '...' : book.title}</h5>
                  <p>{book.description.slice(0,65)}...</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default PopSectLG;
