import { useState } from 'react';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import people from './data';

function App() {
  const [index, setIndex] = useState(0);
  const { image, job, name, text } = people[index];

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length;
      return newIndex;
    });
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = randomNumber + 1;
    }
    const newIndex = randomNumber % people.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="image-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button type="button" className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomPerson}
        >
          surprise me
        </button>
      </article>
    </main>
  );
}

export default App;
