import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import YourPassword from '../YourPassword'

const randomColors = ['red', 'blue', 'orange', 'yellow', 'green', 'violet']

class AddNewPassword extends Component {
  state = {
    passwordsList: [],
    name: '',
    password: '',
    website: '',
    isChecked: false,
    searchInput: '',
  }

  onDeleteItem = id => {
    const {passwordsList} = this.state
    const filteredList = passwordsList.filter(eachItem => eachItem.id !== id)
    this.seState({passwordsList: filteredList})
  }

  getWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  getName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  getPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onToggleChecked = event => {
    this.setState({
      isChecked: event.target.checked,
    })
  }

  getSearchResults = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onAddDetailsObject = event => {
    event.preventDefault()
    const {name, website, password} = this.state

    const newObject = {
      id: uuidv4(),
      name,
      website,
      password,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newObject],
      website: '',
      name: '',
      password: '',
    }))
  }

  render() {
    const {
      passwordsList,
      website,
      name,
      password,
      isChecked,
      searchInput,
    } = this.state

    const searchResults = passwordsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count = searchResults.length

    const initialClassName =
      randomColors[Math.ceil(Math.random() * (randomColors.length - 1))]

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="app-head-container">
          <div className="add-new-password-page">
            <h1 className="password-manager-heading">Add New Password</h1>
            <form
              className="new-password-input"
              onSubmit={this.onAddDetailsObject}
            >
              <div className="password-manager-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-field-icon"
                />
                <input
                  type="text"
                  value={website}
                  placeholder="Enter Website"
                  className="password-manager-input-field"
                  onChange={this.getWebsite}
                />
              </div>
              <div className="password-manager-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-field-icon"
                />
                <input
                  type="text"
                  value={name}
                  placeholder="Enter Username"
                  className="password-manager-input-field"
                  onChange={this.getName}
                />
              </div>
              <div className="password-manager-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-field-icon"
                />
                <input
                  type="password"
                  value={password}
                  placeholder="Enter Password"
                  className="password-manager-input-field"
                  onChange={this.getPassword}
                />
              </div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="app-bottom-container">
          <div className="result-display-head-container">
            <div className="count-display-container">
              <h1 className="side-heading">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                className="filter-input"
                onChange={this.getSearchResults}
              />
            </div>
          </div>
          <div className="show-password-container">
            <input
              type="checkbox"
              value="test"
              id="checkbox"
              className="checkbox"
              onChange={this.onToggleChecked}
            />
            <label htmlFor="checkbox" className="label-text">
              Show passwords
            </label>
          </div>
          {count === 0 ? (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-img"
              />
              <p className="no-password-text">No Passwords</p>
            </div>
          ) : (
            <ul className="passwordItems-display-container">
              {searchResults.map(eachItem => (
                <YourPassword
                  passwordDetails={eachItem}
                  key={eachItem.id}
                  isChecked={isChecked}
                  initialClassName={initialClassName}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default AddNewPassword
