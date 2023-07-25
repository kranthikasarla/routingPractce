// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogsData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    console.log(response)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogsData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogsData} = this.state
    console.log(blogsData)
    const {title, imageUrl, content, avatarUrl, author} = blogsData

    return (
      <div className="blog-item-details-container">
        <h1 className="item-title">{title}</h1>
        <div className="author-container">
          <img src={avatarUrl} alt="avatar" className="avatar-image-1" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="content-image" />
        <p className="content-description">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
