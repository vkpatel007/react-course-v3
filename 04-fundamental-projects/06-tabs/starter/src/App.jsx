import { useEffect, useState } from "react";
import JobInfo from './JobInfo'
import BtnContainer from "./BtnContainer";


const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setLoading] = useState(true)
  const [getData, setData] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

  const fetchData = async (url) => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const changeEmployee = (id) => {
    setCurrentItem(id)
  }

  useEffect(() => {
    fetchData(url)
  }, [])

  if (isLoading) {
    return (
      <h1>Yo I Am Loading</h1>
    )
  }
  console.log(getData)
  return (
    <section className="jobs-center" >
      <BtnContainer data={getData} setCurrentItem={setCurrentItem} currentItem={currentItem} />
      <JobInfo data={getData} currentItem={currentItem} />

    </section>
  )







};
export default App;
