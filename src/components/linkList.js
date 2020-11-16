import React from "react"
import { Link } from "gatsby"

export default ({ items }) => (
  <ol style={{ listStyle: `none` }}>
    {items.map(module => (
      <li>
        <article
          className="post-list-item"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h5>
              <Link to={module.path} itemProp="url">
                <span itemProp>{module.title}</span>
              </Link>
            </h5>
          </header>
          {module.description && (
            <section>
              <p itemProp="description">{module.description}</p>
            </section>
          )}
        </article>
      </li>
    ))}
  </ol>
)
