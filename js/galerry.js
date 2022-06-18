

const imgContainer = document.querySelector('.our-products__list');


imgContainer.addEventListener('click', onContainerClick);

let currentImg = '';
function onContainerClick(event) {

  if (!event.target.classList.contains('our-products__link')) {
    return;
  }
  event.preventDefault();
  console.log("its me")
  const size = event.target.dataset.source;

  currentImg = basicLightbox.create(`
		   <img  src="${size}" >
	`
  );
  currentImg.show();

}
 