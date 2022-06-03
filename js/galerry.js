const galleryItems = [
  {
    preview:
      "./images/main/main.jpg" ,
    original:
      "./images/main/main2x.jpg",
    description: 'ICE CREAM',
  },
  {
    preview:
      "./images/card/card1.jpg",
    original:
      "./images/card/card1x2.jpg",
    description: 'CAYENNE CHOCOLATE',
  },
  {
    preview:
      "./images/card/card2.jpg",
    original:
      "./images/card/card2x2.jpg",
    description: 'CAKE BATTER',
  },
  {
    preview:
     "./images/card/card3.jpg",
    original:
      "./images/card/card3x2.jpg",
    description: 'CANDY CANE',
  },
  {
    preview:
      "./images/card/card4.jpg",
    original:
      "./images/card/card4x2.jpg",
    description: 'PLATTERS',
  },
  {
    preview:
      "./images/card/card1.jpg",
    original:
      "./images/card/card1x2.jpg",
    description: 'DESSERT',
  },
];


const imgContainer = document.querySelector('.our-products__list');
// const cardsMarkup = createImgCards(galleryItems);  
// imgContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// function createImgCards(galleryItems) {
//     return galleryItems.map(({ preview, original, description }) => {
//         return `
//   <div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>
//     `
//     }).join('');
// }

imgContainer.addEventListener('click', onContainerClick);

let currentImg = '';
function onContainerClick(event) {

  if (!event.target.classList.contains('our-products__link')) {
    return;
  }
  event.preventDefault();
  console.log("its me")
  // imgContainer.addEventListener('keydown', onImageClose);
  const size = event.target.dataset.source;

  currentImg = basicLightbox.create(`
		   <img  src="${size}" >
	`
  );
  currentImg.show();

}
 