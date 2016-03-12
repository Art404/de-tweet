import React from 'react'
import {Link} from 'react-router'

class Setup extends React.Component {
  static displayName = 'Setup'

  onAmt(e) {
    console.log(e)
  }

  render() {
    return (
      <div className="Setup">
        <div className="Setup-inner">
          <div className="Setup-option">
            <h3>{`How many tweets would you like to delete?`}</h3>
            <form>
              <input onChange={this.onAmt.bind(this)} type="radio" name="tweetAmt" value="All" checked /> All<br />
              <input onChange={this.onAmt.bind(this)} type="radio" name="tweetAmt" value="Custom" /> Custom Amount<br />
            </form>
          </div>
          <div className="Setup-option">
            <h3>{`Would you like to exclude any tweets?`}</h3>
            <p>{`Enter the urls to any tweets you would like to save.`}</p>
            <form>
              <input type="text" name="tweetExclude" /><br />
            </form>
          </div>
          <br />
          <Link to="/delete">
            {'DELETE TWEETS ⟶ '}
          </Link>
        </div>
      </div>
    )
  }
}

export default Setup
