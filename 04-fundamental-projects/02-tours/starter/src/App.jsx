import { useEffect, useState } from "react";
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  const removeTour = (id) => {
    // return setTours(() => {
    //   return tours.filter(tour => tour.id !== id)
    // })
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
      console.log(tours)
    } catch (error) {
      setError(true)
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h1>There has been an error</h1>
      </div>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button type="button" className="btn" style={{ marginTop: '2rem' }} onClick={() => fetchData()} > Fetch All Tours</button>
        </div>

      </main >
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )

};
export default App;
