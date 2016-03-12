import React from 'react'

class Delete extends React.Component {
  static displayName = 'Delete'

  render() {
    return (
      <div className="Delete">
        <div className="Delete-inner">
          {'DELETING TWEETS!'}
        </div>
      </div>
    )
  }
}

export default Delete
