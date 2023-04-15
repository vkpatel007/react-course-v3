import MenuItem from "./MenuItem"



const Menu = ({ menuItems }) => {
  return (
    <div className="section-center">

      {menuItems.map(items => {
        return <MenuItem key={items.id} {...items} />
      })}

    </div>
  )
}
export default Menu