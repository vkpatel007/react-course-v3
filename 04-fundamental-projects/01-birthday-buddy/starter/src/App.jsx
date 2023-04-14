import { useState } from 'react';
import data from './data'
import List from './List';

const App = () => {
  const [people, setPerson] = useState(data)

  return (

    <main>
      <section className='container'>
        <h3>There are {people.length} people's birthdays</h3>
        <List people={people} />
        <button type='button' className='btn btn-block' onClick={() => setPerson([])}>Remove All</button>
      </section>
    </main>
  )
};
export default App;
