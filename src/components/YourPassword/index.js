import './index.css'

const YourPassword = props => {
  const {passwordDetails, isChecked, initialClassName, onDeleteItem} = props
  const {name, website, password, id} = passwordDetails
  const initial = name[0]

  const renderPassword = () =>
    isChecked ? (
      <p className="password">{password}</p>
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
        className="stars"
      />
    )

  const deletePassword = () => {
    onDeleteItem(id)
  }

  return (
    <li className="passwordItem-container">
      <p className={`initial ${initialClassName}`}>{initial}</p>
      <div className="password-item">
        <p className="website-text">{website}</p>
        <p className="name-text">{name}</p>
        {renderPassword()}
      </div>
      <button
        type="button"
        className="delete-btn"
        data-testId="delete"
        onClick={deletePassword}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default YourPassword
