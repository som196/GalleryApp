import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickedThumbnail} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = imageDetails
  const clicked = () => {
    clickedThumbnail(imageUrl, imageAltText)
  }
  return (
    <li>
      <button type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} onClick={clicked} />
      </button>
    </li>
  )
}

export default ThumbnailItem
