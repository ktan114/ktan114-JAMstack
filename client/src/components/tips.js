import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import './tips.css'

const Tips = () => (
  <div>
    <h1>Tips</h1>
    <StaticQuery
      query={graphql`
        query AuthorQuery {
          hasura {
            tipsandtricks {
              id
              category
              content
              source
            }
          }
        }
      `}
      render={data => (
        <div className="Tips">
          {data.hasura.tipsandtricks.map(tip => {
            return (
              <div className="Tip" key={tip.id}>
                <h2 className="Tip__Category"> {tip.category}</h2>
                <h3 className="Tip__Content">{tip.content}</h3>
                <h6 className="Tip__Source">Source: {tip.source}</h6>
              </div>
            )
          })}
        </div>
      )}
    />
  </div>
)

export default Tips
