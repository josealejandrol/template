import { GalleryItem } from "./GalleryItem"

const data = [
  {
    title: 'MONOSCOPE',
    subtitle: 'Phasellus urna nulla',
    imgUrl: 'img1.jpg'
  },
  {
    title: 'PRAESENT',
    subtitle: 'Sed in nisl tellus',
    imgUrl: 'img2.jpg'
  },
  {
    title: 'SUSPENDISSE',
    subtitle: 'Praesent in augue',
    imgUrl: 'img3.jpg'
  },
  // {
  //   title: 'CORABIRUR',
  //   subtitle: 'Nam nisi mauris',
  //   imgUrl: 'img4.jpg'
  // },
  // {
  //   title: 'AENEAN',
  //   subtitle: 'Quam vitae pretium',
  //   imgUrl: 'img5.jpg'
  // },
  // {
  //   title: 'SCELERISQUE',
  //   subtitle: 'Quam vitae blandit',
  //   imgUrl: 'img6.jpg'
  // },
  // {
  //   title: 'ELEMENTUM',
  //   subtitle: 'Fusce nisl sem',
  //   imgUrl: 'img7.jpg'
  // }
];

export const Gallery = () => {
  return (
    <div className="gallery__content">
      {
        data && data.map((item, idx) => (
          <GalleryItem key={idx} {...item} />
        ))
      }
      <GalleryItem />
    </div>
  )
}
