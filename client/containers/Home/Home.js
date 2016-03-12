import React from 'react'
import {Link} from 'react-router'

class Home extends React.Component {
  static displayName = 'Home'

  render() {
    return (
      <div className="Home">
        <div className="Home-inner">
          <h3>{`Is your Twitter trash? Are you problematic? Basic? Annoying?`}</h3>
          <p>
            {`Worry no more! With de-tweet you can delete all those lingering
              tweets and pave the way to a new, re-branded, you.`}
          </p>
          <Link to="/setup" className="Home-get-started">
            {'GET STARTED ⟶ '}
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
