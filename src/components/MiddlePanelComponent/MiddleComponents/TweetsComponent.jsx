import React, { Component, Fragment } from 'react'
import StreamComponent from './StreamComponent/Stream'
import { streamTweets } from './Tweets.css'
import PropTypes from 'prop-types'

class TweestsComponent extends Component {
  render () {
    let tweets = this.props.tweets

    return (
      <Fragment>
        <div className={streamTweets}>
          <div className='streaming' id='tweet'>
            {tweets !== null
              ? Object.keys(tweets).map(id => (
                <StreamComponent
                  key={id}
                  text={tweets[id].tweet}
                  click={() => this.props.clicks(id)}
                  />
                ))
              : undefined}

          </div>
        </div>
      </Fragment>
    )
  }
}

TweestsComponent.propTypes = {
  tweets: PropTypes.object
}

export default TweestsComponent
