import React from 'react'

import Logo from './Logo'

export default function Home() {
  
  return (
    <div className="wrapper">


      <div className="profile-card js-profile-card">
        <div className="profile-card__img">
          <Logo />
        </div>

        <div className="profile-card__cnt js-profile-cnt">
          <div className="profile-card__name">Raúl C. Rivero</div>
          <div className="profile-card__txt">Desarrollador Web de <strong>Cuba</strong>. <br /> Me encanta trabajar con <strong>Django</strong> y <strong>React</strong>.</div>
          <div className="profile-card-loc">
            <span className="profile-card-loc__icon">
            </span>

          </div>

          <div className="profile-card-social">

            <a href="https://twitter.com/raulcr98" rel="noopener noreferrer" className="profile-card-social__item twitter" target="_blank">
              <i className="fa fa-twitter" />
            </a>

            <a href="https://www.linkedin.com/in/raulcr98/" rel="noopener noreferrer" className="profile-card-social__item" target="_blank" style={{ background: "#0e76a8" }}>
              <i className="fa fa-linkedin" />
            </a>

            <a href="https://t.me/raulcr98" rel="noopener noreferrer" className="profile-card-social__item behance" target="_blank">
              <i className="fa fa-telegram" />
            </a>

            <a href="https://github.com/raulcr98" rel="noopener noreferrer" className="profile-card-social__item github" target="_blank">
              <i className="fa fa-github" />
            </a>

            <a href="https://stackoverflow.com/users/11168104/raul-castro-rivero" rel="noopener noreferrer" className="profile-card-social__item link" target="_blank">
              <i className="fa fa-stack-overflow" />
            </a>

          </div>

        </div>

      </div>

    </div>
  )
}
