import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
const tempCategories = menu.map(item => item.category)
const tempSet = new Set(tempCategories)
const tempItems = ['all', ...tempSet]

const allCategories = ['all', ...new Set(menu.map(item => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      return setMenuItems(menu)
    }

    const newItems = menu.filter(item => item.category === category)
    setMenuItems(newItems)
  }

  return (<main>
    <section className="menu">
      <Categories categories={categories} filterItems={filterItems} />
      <Title text='our menu' />
      <Menu menuItems={menuItems} />

    </section>

  </main>

  )
};
export default App;
