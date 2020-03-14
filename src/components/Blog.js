import React, { useState, useEffect } from 'react'
import { BeatLoader } from "react-spinners"

import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const override = "display:flex; flex-direction: row; justify-content: center;"

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      fetch('https://secure-earth-33703.herokuapp.com/api/post/')
        .then(res => res.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        })
    }
  })

  return (
    <div class="wrapper">
      {!loading &&
        <Link to="/" className="back-link"><i className="fa fa-arrow-left"></i> Back</Link>
      }
      <div className="blog">

        <BeatLoader
          css={override}
          color={"#ff4b01"}
          loading={loading}
        />

        {posts.map(item =>
          <a className="link" href={item.source}>
            <div className="post-blog">
              <div className="img">
                <LazyLoadImage
                  alt={item.title}
                  effect="blur"
                  src={item.banner}
                  width="100%" />
              </div>
              <p className="title">{item.title}</p>
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
