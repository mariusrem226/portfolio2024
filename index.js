const loader_unit = document.getElementById('text-loader-unit');
const loader_decade = document.getElementById('text-loader-decade');
const loader_hundred = document.getElementById('text-loader-hundred');
const app = document.getElementById('app');
const loader = document.getElementById('loader');
const tb_qt_1 = document.getElementById('tb-qt-1');
const tb_qt_2 = document.getElementById('tb-qt-2');
const tb_qt_3 = document.getElementById('tb-qt-3');
//cursor variables
const cursor = document.getElementById('cursor');
const cursor_elt_1 = document.getElementById('cursor-elt-1');
const cursor_elt_2 = document.getElementById('cursor-elt-2');
const cursor_elt_3 = document.getElementById('cursor-elt-3');
const HEIGHT_LETTER_CELL = 70;

//details button
const detail_btn = document.getElementById('detail-btn');
const detail_section = document.getElementById('detail-section');
const detail_mf = document.getElementById('mf-details');


//get cols name

const col_1 = document.getElementById('ct-col-1');
const col_2 = document.getElementById('ct-col-2');
const col_3 = document.getElementById('ct-col-3');
const col_4 = document.getElementById('ct-col-4');
const col_5 = document.getElementById('ct-col-5');
const col_6 = document.getElementById('ct-col-6');
const col_7 = document.getElementById('ct-col-7');
const col_8 = document.getElementById('ct-col-8');
const col_9 = document.getElementById('ct-col-9');
const col_10 = document.getElementById('ct-col-10');
const col_11 = document.getElementById('ct-col-11');

//get projects main image
var img_mf = document.getElementById('img-mobile-food');
var img_anazir = document.getElementById('img-anazir');
var img_more = document.getElementById('img-more');
var list_main_images = [img_mf, img_anazir, img_more];

//get big titles 
var big_title_mf = document.getElementById('big-title-mf');
var big_letter_container = document.getElementById('big-letter-container');
var big_letter = document.getElementById('big-letter-container');

//gallery
var gallery_container = document.getElementById('gallery-container');
var gallery_mf = document.getElementById('mf-gallery');
var img_mf_1 = gallery_mf.querySelector('.first');
var img_mf_2 = gallery_mf.querySelector('.second');
var img_mf_3 = gallery_mf.querySelector('.third');
var selector_1 = gallery_mf.querySelector('.selector-1');
var selector_2 = gallery_mf.querySelector('.selector-2');
var selector_3 = gallery_mf.querySelector('.selector-3');
var imgSelected = 1;
var outline_selected=document.getElementById("outline-selected");
var selected_translation=0;

function initSelectorClick() {
  selector_1.addEventListener('click', () => {
    const oldSelected=imgSelected;
    imgSelected = 1;
    if (oldSelected != 1) {
    moveOutlineSelected(selector_1);

      if (oldSelected === 3) {
        goBottom(img_mf_3);
        img_mf_2.style.transition="none";
        img_mf_2.style.transform="translateY(1000px)";
        centerFromTheTop(img_mf_1);
      }
      else {
        goBottom(img_mf_2);
        centerFromTheTop(img_mf_1);
      }
    }
    
  })


  selector_2.addEventListener('click', () => {
    console.log(imgSelected);
    const oldSelected=imgSelected;
    imgSelected = 2;
    if (oldSelected != 2) {
    moveOutlineSelected(selector_2);

      if (oldSelected === 1) {
        goTop(img_mf_1);
        centerFromTheBottom(img_mf_2);
      }
      if (oldSelected === 3) {
        goBottom(img_mf_3)
        centerFromTheTop(img_mf_2)
      }
    } 
  }
  )

  selector_3.addEventListener('click', () => {
    console.log(imgSelected);
    const oldSelected=imgSelected;
    imgSelected = 3;
    if (oldSelected != 3) {
      moveOutlineSelected(selector_3);

      if (oldSelected === 1) {
       goTop(img_mf_1);
       img_mf_2.style.transition="none";
       img_mf_2.style.transform="translateY(-1000px)";
       centerFromTheBottom(img_mf_3);
      }
      else {
        goTop(img_mf_2);
        centerFromTheBottom(img_mf_3);
      }
    } 
    

  })


}

function centerFromTheTop(img){
  img.style.transition="none";
  img.style.transform="translateY(-1000px)";
  img.style.transition="transform 1s cubic-bezier(0,.21,0,1)";
  img.style.transform="translateY(0px)";
  //img.style.transition="none";
}
function centerFromTheBottom(img){
  console.log("appel");
  img.style.transition="none";
  img.style.transform="translateY(1000px)";
  img.style.transition="transform 1s cubic-bezier(0,.21,0,1)";
  img.style.transform="translateY(0px)";
  //img.style.transition="none";
}
function goTop(img){
  
  img.style.transform="translateY(-1000px)";
 // img.style.transition="none";
}
function goBottom(img){
 
  img.style.transform="translateY(1000px)";
 // img.style.transition="none";
}

//function to init col position
function initCol() {
  col_1.style.transform = "translateY(" + -3 * HEIGHT_LETTER_CELL + "px)";
  col_2.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
  col_3.style.transform = "translateY(" + -4 * HEIGHT_LETTER_CELL + "px)";
  col_4.style.transform = "translateY(" + -2 * HEIGHT_LETTER_CELL + "px)";
  col_8.style.transform = "translateY(" + -4 * HEIGHT_LETTER_CELL + "px)";
  col_9.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
  col_10.style.transform = "translateY(" + -4 * HEIGHT_LETTER_CELL + "px)";
  col_11.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
}
function allColEmply() {
  col_1.style.transform = "translateY(" + -3 * HEIGHT_LETTER_CELL + "px)";
  col_2.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
  col_3.style.transform = "translateY(" + -4 * HEIGHT_LETTER_CELL + "px)";
  col_4.style.transform = "translateY(" + -2 * HEIGHT_LETTER_CELL + "px)";
  col_5.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
  col_6.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
  col_7.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
  col_8.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
  col_9.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
  col_10.style.transform = "translateY(" + -4 * HEIGHT_LETTER_CELL + "px)";
  col_11.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
}


//function to init image position
function initMainImages() {
  img_mf.style.transform = "translateY(1000px)";
  img_anazir.style.transform = "translateY(-1000px)";
  img_more.style.transform = "translateX(-1000px)";
}
function initBottomBtn() {
  detail_btn.style.transform = "translateY(25px)";

  detail_btn.addEventListener('click', () => {
    showDetailAnimation(detail_mf);
    console.log("ici");
  })
}
// Function to update the loader
function updateLoader(unit, ten, hundred) {

  loader_unit.textContent = `${unit}`;
  loader_decade.textContent = `${ten}`;
  loader_hundred.textContent = `${hundred}`;
}

// Function to simulate progress from 1 to 100 over 4 seconds
function simulateProgress() {
  let progress = 0;
  let unit = 0;
  let ten = 0;
  let hundred = 0;
  const interval = 800 / 100; // 4 seconds divided by 100 steps

  function incrementProgress() {
    updateLoader(unit, ten, hundred);

    progress++;
    unit++;
    if (progress <= 100) {
      if (unit === 10) {
        ten++;
        unit = 0;
      }
      if (ten === 10) {
        hundred++;
        console.log(progress)
        ten = 0;
      }

      setTimeout(incrementProgress, interval);

    }
    else {
      loader.style.display = "none";
      app.style.opacity = "1";

      setTimeout(showNameAnimation, 500)
      setTimeout(rotate_tbqt, 500)
      setTimeout(showMainImagesAnimation, 1000)
    }
  }

  incrementProgress();
}
function rotate_tbqt() {
  tb_qt_1.animate({
    transform: "rotate(360deg)",
  }, { duration: 1000, easing: "cubic-bezier(0, 0.30, 0.19, 1)" });
  tb_qt_2.animate({
    transform: "rotate(-360deg)",
  }, { duration: 1000, easing: "cubic-bezier(0, 0.30, 0.19, 1)" });
  tb_qt_3.animate({
    transform: "rotate(360deg)",
  }, { duration: 1000, easing: "cubic-bezier(0, 0.30, 0.19, 1)" });


}

function rotate_cursor(factor) {
  cursor_elt_1.style.transform = "rotate(" + 45 * factor + "deg)"
  cursor_elt_2.style.transform = "rotate(-" + 45 * factor + "deg)"
  cursor_elt_3.style.transform = "rotate(" + 45 * factor + "deg)"
}

function showNameAnimation() {
  col_1.style.transform = "translateY(" + 0 + "px)";
  col_2.style.transform = "translateY(" + -2 * HEIGHT_LETTER_CELL + "px)";
  col_3.style.transform = "translateY(0px)";
  col_4.style.transform = "translateY(" + -HEIGHT_LETTER_CELL + "px)";
  col_5.style.transform = "translateY(" + -2 * HEIGHT_LETTER_CELL + "px)";
  col_6.style.transform = "translateY(-" + HEIGHT_LETTER_CELL + "px)";
  col_7.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
  col_8.style.transform = "translateY(" + 0 + "px)";
  col_9.style.transform = "translateY(" + 0 + "px)";
  col_10.style.transform = "translateY(" + 0 + "px)";
  col_11.style.transform = "translateY(" + 0 + "px)";


}
function showMobileFoodTextAnimation() {
  col_1.style.transform = "translateY(" + 0 + "px)";
  col_2.style.transform = "translateY(" + 0 * HEIGHT_LETTER_CELL + "px)";
  col_3.style.transform = "translateY(" + -1 * HEIGHT_LETTER_CELL + "px)";
  col_4.style.transform = "translateY(" + -1 * HEIGHT_LETTER_CELL + "px)";
  col_5.style.transform = "translateY(" + -1 * HEIGHT_LETTER_CELL + "px)";
  col_6.style.transform = "translateY(" + -2 * HEIGHT_LETTER_CELL + "px)";
  col_7.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
  col_8.style.transform = "translateY(" + -1 * HEIGHT_LETTER_CELL + "px)";
  col_9.style.transform = "translateY(" + -1 * HEIGHT_LETTER_CELL + "px)";
  col_10.style.transform = "translateY(" + -1 * HEIGHT_LETTER_CELL + "px)";
  col_11.style.transform = "translateY(" + -1 * HEIGHT_LETTER_CELL + "px)";
  rotate_tbqt();
}

function showMainImagesAnimation() {
  img_mf.style.transform = "translateY(0)";
  img_anazir.style.transform = "translateY(0)";
  img_more.style.transform = "translateY(0)";
}
function showDetailBtnAnimation() {
  detail_btn.style.transform="translateY(0px)";
  
}
function collapseDetailBtnAnimation(){
  detail_btn.style.transform="translateY(-25px)"
}
function collapseTBQT() {
  tb_qt_1.animate({
    transform: "rotate(360deg)",
    width: 0
  }, { duration: 1000, fill: "forwards", easing: "cubic-bezier(0, 0.30, 0.19, 1)" });
  tb_qt_2.animate({
    transform: "rotate(-360deg)",
    width: 0
  }, { duration: 1000, fill: "forwards", easing: "cubic-bezier(0, 0.30, 0.19, 1)" });
  tb_qt_3.animate({
    transform: "rotate(360deg)",
    width: 0
  }, { duration: 1000, fill: "forwards", easing: "cubic-bezier(0, 0.30, 0.19, 1)" });
}
function showDetailAnimation(details) {
  
  allColEmply();
  setTimeout(collapseTBQT, 100);
  putMainImageFullScreen();
  
  setTimeout(revealBigTitle, 450);
  setTimeout(collapseDetailBtnAnimation, 450);
  setTimeout(showGallery, 1500);
  setTimeout(showDetails, 2500, detail_mf);
  
}
function showDetails(details){
  const details_container=details.querySelector(".details-container");
  details_container.style.transform="translateY(0px)";
}
function showGallery() {
  gallery_container.style.display = "inline";
  img_mf_1.style.transform = "translateY(1000px)";
  img_mf_2.style.transform = "translateY(1000px)";
  img_mf_3.style.transform = "translateY(1000px)";
  selector_1.style.transform = "translateY(1000px)";
  selector_2.style.transform = "translateY(1000px)";
  selector_3.style.transform = "translateY(1000px)";

  

  setTimeout(moveToCenterGallery, 50, img_mf_1);

  initSelectorClick();

  var delay = 200;
  setTimeout(moveToCenterGallery, delay, selector_1);
  setTimeout(moveToCenterGallery, delay + 50, selector_2);
  setTimeout(moveToCenterGallery, delay + 100, selector_3);
  setTimeout(initOutlineSelected, delay + 1100);



}

function moveOutlineSelected(elt){
    const position = elt.getBoundingClientRect();
    const outline_rect=outline_selected.getBoundingClientRect();
    const target=position.top-outline_rect.top ;
    console.log(target, selected_translation);

    outline_selected.style.transform="translateY("+(selected_translation+target)+ "px)";

    selected_translation+=target;
}

function initOutlineSelected(){
  //moveOutlineSelected(selector_1);
  
  outline_selected.style.opacity=1;
  
}

function moveToCenterGallery(img) {
  centerFromTheBottom(img);
 
}
function revealBigTitle() {
  var i = 0;
  big_title_mf.style.display = "flex";
  const listLetter = document.getElementsByClassName("big-letter");
  const size = listLetter.length;
  console.log(listLetter);
  revealBigLetter(i, size, listLetter);

}

function revealBigLetter(i, size, listLetter) {
  console.log(i, size, listLetter)
  if (i < size) {
    listLetter[i].animate(
      {
        transform: "translateX(0)",
      },
      {
        duration: 750, fill: "forwards",
        easing: "cubic-bezier(0, 0.30, 0.19, 1)"
      });
    setTimeout(revealBigLetter, 60, i + 1, size, listLetter);
  }

}
function putMainImageFullScreen() {
  const img = document.getElementById("img-mf");
  img.animate({
    maxHeight: "100%",
    width: "100%",
    filter: "blur(80px)",
  }, { duration: 600, fill: "forwards", easing: "cubic-bezier(0, 0.30, 0.19, 1)" });

}
function initImagesOverEffect() {
  list_main_images.forEach(elt => {
    elt.style.filter = "grayscale(100%)"
    elt.addEventListener('mouseenter', () => { elt.style.filter = "grayscale(0%)"; mouseEnterImageHandler(elt) });
    elt.addEventListener('mouseleave', () => { elt.style.filter = "grayscale(100%)"; endHoverMainImageAnimation(elt) });
  });
}

function removeImagesOverEffect() {
  console.log("dans le remove")
  list_main_images.forEach(elt => {
    const clonedElement = elt.cloneNode(true);
    // Replace the original element with the cloned one
    elt.parentNode.replaceChild(clonedElement, elt);
    img_mf = document.getElementById('img-mobile-food');
    img_anazir = document.getElementById('img-anazir');
    img_more = document.getElementById('img-more');
    list_main_images = [img_mf, img_anazir, img_more];
  });
}


function initOnClickImages() {

  img_anazir.addEventListener('click', function (e) {
    clickOnAnazir();
  });
  img_more.addEventListener('click', function (e) {
    clickOnMore();
  });
  img_mf.addEventListener('click', function (e) {
    clickOnMobileFood();
  });

}

function startHoverMainImageAnimation(img) {

  const rect = img.getBoundingClientRect();
  const imageLeft = rect.left -0.15*rect.width; // Account for any scrolling
  const imageTop = (rect.top - 0.5 * rect.height );   // Account for any scrolling

  // Move the cursor to the image's position
  cursor.animate({
    left: `${imageLeft}px`,
    top: `${imageTop}px`
  }, {
    duration: 800, fill: "forwards",
    easing: "cubic-bezier(0, 0.30, 0.19, 1)"
  }); // Adjust duration as needed
  for (const child of cursor.children) {

    child.style.width = `${rect.width * 1.30}px`;
    child.style.height = `${rect.width * 1.30}px`;

    console.log("enter");

  }
  rotate_cursor(1);
}

function endHoverMainImageAnimation(img) {
  document.body.addEventListener('pointermove', pointerMoveHandler);

  for (const child of cursor.children) {
    child.style.height = "20px";
    child.style.width = "20px";
    console.log("leave");
  }
  rotate_cursor(-1);

}

const pointerMoveHandler = event => {
  const { clientX, clientY } = event;

  cursor.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 1000, fill: "forwards" });
};



const mouseEnterImageHandler = (elt) => {
  document.body.removeEventListener('pointermove', pointerMoveHandler);
  startHoverMainImageAnimation(elt);
}

document.body.addEventListener('pointermove', pointerMoveHandler);



function clickOnAnazir() {
  removeImagesOverEffect();
  endHoverMainImageAnimation(img_anazir);
  cursor.style.zIndex = "10"

  img_more.animate({
    transform: "translateX(-1000px)"
  }, { duration: 1000, fill: "forwards", easing: "cubic-bezier(0, 0.30, 0.19, 1)" })
  img_mf.animate({
    transform: "translateY(1000px)"
  }, { duration: 1000, fill: "forwards", easing: "cubic-bezier(0, 0.30, 0.19, 1)" });
  setTimeout(putImageInFront, 10, img_anazir);
}
function clickOnMore() {
  removeImagesOverEffect();
  endHoverMainImageAnimation(img_more);
  cursor.style.zIndex = "10"

  img_anazir.animate({
    transform: "translateY(-1000px)"
  }, { duration: 1000, fill: "forwards", easing: "cubic-bezier(0, 0.30, 0.19, 1)" })
  img_mf.animate({
    transform: "translateY(1000px)"
  }, { duration: 1000, fill: "forwards", easing: "cubic-bezier(0, 0.30, 0.19, 1)" });
  setTimeout(putImageInFront, 10, img_more);
}

function clickOnMobileFood() {
  removeImagesOverEffect();
  endHoverMainImageAnimation(img_mf);
  cursor.style.zIndex = "10"

  img_anazir.animate({
    transform: "translateY(-1000px)"
  }, { duration: 1000, fill: "forwards", easing: "cubic-bezier(0, 0.30, 0.19, 1)" })
  img_more.animate({
    transform: "translateX(-1000px)"
  }, { duration: 1000, fill: "forwards", easing: "cubic-bezier(0, 0.30, 0.19, 1)" });
  setTimeout(putImageInFront, 10, img_mf);
  setTimeout(showMobileFoodTextAnimation, 400);
  setTimeout(showDetailBtnAnimation, 400);
}
function putImageInFront(img) {
  img.animate({
    left: 0,
    top: 0,
    height: "100vh",
    width: "100vw",
  }, { duration: 400, fill: "forwards", easing: "cubic-bezier(0, 0.30, 0.19, 1)" });
}
// Start the simulation
initCol();
initMainImages();
initOnClickImages();
simulateProgress();
initImagesOverEffect();
initBottomBtn();