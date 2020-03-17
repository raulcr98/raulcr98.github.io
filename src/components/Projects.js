import React, { useState, useEffect } from 'react'
import { BeatLoader } from "react-spinners"

import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const override = "display:flex; flex-direction: row; justify-content: center;"

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      fetch('https://api.github.com/users/raulcr98/repos')
        .then(res => res.json())
        .then((data) => {
          setRepos(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        })
    }
  });

  return (
    <div class="wrapper">
      {!loading &&
        <Link to="/" className="back-link"><i className="fa fa-arrow-left"></i> Back</Link>
      }

      <BeatLoader
        css={override}
        color={"#ff4b01"}
        loading={loading}
      />
      <div className="blog">
        {repos.map(item =>
          <a className="link" href={item.html_url}>
            <div className="post">
              <div className="img">
                <LazyLoadImage
                  alt={item.title}
                  effect="blur"
                  src={"https://raw.githubusercontent.com/raulcr98/" + item.name + "/master/logo.png"}
                  width="100%"
                />
              </div>
              <p className="title">{item.name} {item.homepage && <a href={item.homepage} target="__blank">[ Demo ]</a>}</p>
              <p className="description">{item.description}</p>
            </div>
          </a>
        )}
      </div>
      {!loading &&
        <Link to="/" className="back-link"><i className="fa fa-arrow-left"></i> Back</Link>
      }
    </div>
  )
}
