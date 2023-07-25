// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails
  return (
    <li className="blog-item">
      <Link to={`/blogs/:${id}`} className="blog-item-link">
        <div className="item-container">
          <img src={imageUrl} alt={`item${id}`} className="content-image-1" />
          <div>
            <p className="topic-details">{topic}</p>
            <h1 className="title-heading">{title}</h1>
            <div className="author-name-container">
              <img src={avatarUrl} alt="avatar" className="avatar-image" />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
