const BtnContainer = ({ data, setCurrentItem, currentItem }) => {

  return (
    <div className="btn-container">
      {data.map((item, index) => {
        console.log(item.id)
        return <button key={item.id} className={index === currentItem ? 'job-btn active-btn' : 'job-btn'} onClick={() => setCurrentItem(index)}>
          {item.company}
        </button>
      })}
    </div>
  )
}
export default BtnContainer