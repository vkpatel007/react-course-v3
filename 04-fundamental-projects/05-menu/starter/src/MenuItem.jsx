const MenuItem = ({ title, price, desc, img }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <span className="item-price">{price}</span>
        </header>
        <p className='item-text'>{desc}</p>

      </div>


    </article>
  )
}
export default MenuItem