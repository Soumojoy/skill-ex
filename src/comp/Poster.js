import React from 'react'

const Poster = () => {
  return (
    <div className="app">
    <header>
      <span className="plus">+</span>
      <div className="about">
        An Interpretation of{" "}
        <a
          className="btn"
          href="https://www.pinterest.com/pin/304485624799705339/"
          target="_blank"
          rel="noopener noreferrer"
        >
          this
        </a>{" "}
        poster.
      </div>
    </header>

    <div className="strobo-trails">
      <img
        className="strobo s-t5"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/508143/strobo.svg"
        alt="strobo"
      />
      <img
        className="strobo s-t4"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/508143/strobo.svg"
        alt="strobo"
      />
      <img
        className="strobo s-t3"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/508143/strobo.svg"
        alt="strobo"
      />
      <img
        className="strobo s-t2"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/508143/strobo.svg"
        alt="strobo"
      />
      <img
        className="strobo s-t1"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/508143/strobo.svg"
        alt="strobo"
      />
    </div>

    <div className="strobo-top">
      <img
        className="strobo s-top"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/508143/strobo.svg"
        alt="strobo"
      />
    </div>

    <div className="img">
      <div className="title">
        <span>2014 01 27</span>
        <span>FAI AOYAMA</span>
      </div>
      <div className="wave-cont">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/508143/wave.svg"
          alt="wave"
        />
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/508143/wave.svg"
          alt="wave"
        />
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/508143/wave.svg"
          alt="wave"
        />
      </div>
    </div>

    <div className="caption">
      <div>
        A spot of higher than normal intensity in the sweep of indicator, as
        on a radar screen, used as a reference for determining distance.
      </div>
      <div>
        Also called strobe light - an electronic flash that produces rapid,
        brilliant burst of light, used for photography, special lighting
        effects, etc.
      </div>
    </div>

    <div id="dtl-left">
      <div>2014.1.27 MONDAY 22:00-5:00 at FAI AOYAMA</div>
    </div>
    <div id="dtl-right">
      <div>2014.1.27 MONDAY 22.00-5:00 at FAI AOYAMA</div>
    </div>

    <footer>
      <span className="plus">+</span>
    </footer>
  </div>
  )
}

export default Poster
