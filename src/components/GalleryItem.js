import { galleryImages } from "../helpers/galleryImages"
import imagen from '../assets/gallery/img1.jpg'

export const GalleryItem = ({title, subtitle, imgUrl}) => {
  return (
    <div className="gallery__card">
      <div className="gallery__card-title">
        <h3>{title}</h3>
      </div>
      <div className="gallery__card-body">
        <img
          src={imagen}
          alt={title}
          style={{height: '90%', width: '90%'}}
        />
        <p>{subtitle}</p>
      </div>
    </div>
  )
}