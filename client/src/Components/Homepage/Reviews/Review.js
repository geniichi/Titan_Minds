import './Review.css'

const Review = () => {
  return (
    <section id='review-main-container'>
      <h1>REVIEWS</h1>
      <div>
        <div className="review-image-container">
          <img src='https://img.freepik.com/premium-photo/young-handsome-man-smiling-cheerfully-feeling-happy-showing-concept-university-student-concept_1194-324119.jpg'></img>
        </div>
        <div className="review-person-container">
          <div className="review-person-description">
            <h2>Juan Dela Cruz</h2>
            <p>Computer Engineer</p>
          </div>
          <div className="review-person-comment">
            <h5><em>"I learned something new everyday"</em></h5>
          </div>
        </div>
      </div>

      <div>
        <div className="review-person-container">
          <div className="review-person-description">
            <h2>Juan Dela Cruz</h2>
            <p>Computer Engineer</p>
          </div>
          <div className="review-person-comment">
            <h5><em>"I learned something new everyday"</em></h5>
          </div>
        </div>
        <div className="review-image-container">
          <img src='https://img.freepik.com/premium-photo/young-handsome-man-smiling-cheerfully-feeling-happy-showing-concept-university-student-concept_1194-324119.jpg'></img>
        </div>
      </div>
    </section>

  )
}

export default Review
