import { useEffect, useState } from 'react';
import ToursList from './ToursList';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  // remove tour
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // fetch data
  const fetTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length < 1) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn refresh-btn" type="button" onClick={fetTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <ToursList tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
