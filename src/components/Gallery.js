import { GalleryItem } from "./GalleryItem";

const data = [
  {
    id: 1,
    title: "MONOSCOPE",
    subtitle: "Phasellus urna nulla",
    imgUrl: "img1.jpg",
  },
  {
    id: 2,
    title: "PRAESENT",
    subtitle: "Sed in nisl tellus",
    imgUrl: "img2.jpg",
  },
  {
    id: 3,
    title: "SUSPENDISSE",
    subtitle: "Praesent in augue",
    imgUrl: "img3.jpg",
  },
  // {
  //   id: 4,
  //   title: 'CORABIRUR',
  //   subtitle: 'Nam nisi mauris',
  //   imgUrl: 'img4.jpg'
  // },
  // {
  //   id: 5,
  //   title: 'AENEAN',
  //   subtitle: 'Quam vitae pretium',
  //   imgUrl: 'img5.jpg'
  // },
  // {
  //   id: 6,
  //   title: 'SCELERISQUE',
  //   subtitle: 'Quam vitae blandit',
  //   imgUrl: 'img6.jpg'
  // },
  // {
  //   id: 7,
  //   title: 'ELEMENTUM',
  //   subtitle: 'Fusce nisl sem',
  //   imgUrl: 'img7.jpg'
  // }
];

export const Gallery = () => {
  return (
    <div className="gallery__content">
      {data &&
        data.map((item, idx) => {
          console.log(idx)
          return  <GalleryItem key={item.id.toString()} {...item} />;
        })}
      <GalleryItem />
    </div>
  );
};
