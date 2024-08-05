import './index.css'

const HistoryItem = props => {
  const {eachOne, onDeleteEach} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachOne

  const onDeleteElement = () => {
    onDeleteEach(id)
  }

  return (
    <li className="list-element">
      <div className="history-items">
        <p className="time">{timeAccessed}</p>
        <div className="history-details">
          <img className="image" src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <div className="button-container">
        <button
          className="button"
          type="button"
          onClick={onDeleteElement}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
