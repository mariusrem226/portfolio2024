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
const bottom_btn = document.getElementById("bottom-btn");



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
var img_mf_container = document.getElementById('img-mobile-food');
var img_anazir_container = document.getElementById('img-anazir');
var img_more = document.getElementById('img-more');

var img_mf = img_mf_container.querySelector(".img-project");
var img_anazir = img_anazir_container.querySelector(".img-project");



var list_main_images = [img_mf_container, img_anazir_container, img_more];

//get big titles 
var big_title_mf = document.getElementById('big-title-mf');
var big_title_anazir = document.getElementById('big-title-anazir');
var big_title_more = document.getElementById('big-title-more');




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
var outline_selected = document.getElementById("outline-selected");
var selected_translation = 0;


//top button
var btn_back = document.getElementById("btn-back");
var btn_top = document.getElementById("btn-top");
var backClickfunction;
const animation_SVG_forward = document.getElementById('animation-forward');
const animation_SVG_backward = document.getElementById('animation-backward');

const animation_SVG_forward_bottom = document.getElementById('animation-forward-bottom');
const animation_SVG_backward_bottom = document.getElementById('animation-backward-bottom');




function initSelectorClick() {
  selector_1.addEventListener('click', () => {
    const oldSelected = imgSelected;
    imgSelected = 1;
    if (oldSelected != 1) {
      moveOutlineSelected(selector_1);

      if (oldSelected === 3) {
        goBottom(img_mf_3);
        img_mf_2.style.transition = "none";
        img_mf_2.style.transform = "translateY(1000px)";
        centerFromTheTop(img_mf_1);
      }
      else {
        goBottom(img_mf_2);
        centerFromTheTop(img_mf_1);
      }
    }

  })


  selector_2.addEventListener('click', () => {
    const oldSelected = imgSelected;
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
    const oldSelected = imgSelected;
    imgSelected = 3;
    if (oldSelected != 3) {
      moveOutlineSelected(selector_3);

      if (oldSelected === 1) {
        goTop(img_mf_1);
        img_mf_2.style.transition = "none";
        img_mf_2.style.transform = "translateY(-1000px)";
        centerFromTheBottom(img_mf_3);
      }
      else {
        goTop(img_mf_2);
        centerFromTheBottom(img_mf_3);
      }
    }


  })


}

function centerFromTheTop(img) {
  img.style.transition = "none";
  img.style.transform = "translateY(-1000px)";
  img.style.transition = "transform 1s ease-out";
  img.style.transform = "translateY(0px)";
  //img.style.transition="none";
}
function centerFromTheBottom(img) {
  img.style.transition = "none";
  img.style.transform = "translateY(1000px)";
  img.style.transition = "transform 1s ease-out";
  img.style.transform = "translateY(0px)";
  //img.style.transition="none";
}
function goTop(img) {

  img.style.transform = "translateY(-1000px)";
  // img.style.transition="none";
}
function goBottom(img) {

  img.style.transform = "translateY(1000px)";
  // img.style.transition="none";
}

//function to init col position
function initCol() {
  col_1.style.transform = "translateY(" + -3 * HEIGHT_LETTER_CELL + "px)";
  col_2.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
  col_3.style.transform = "translateY(" + -4 * HEIGHT_LETTER_CELL + "px)";
  col_4.style.transform = "translateY(" + -2 * HEIGHT_LETTER_CELL + "px)";
  col_8.style.transform = "translateY(" + -7 * HEIGHT_LETTER_CELL + "px)";
  col_9.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
  col_10.style.transform = "translateY(" + -4 * HEIGHT_LETTER_CELL + "px)";
  col_11.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
}
function allColEmpty() {
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
  img_mf_container.style.transform = "translate(100vw, 70vh)";
  img_anazir_container.style.transform = "translate(60vw, -100%)";
  img_more.style.transform = "translate(10vw, 100vh)";
}
function initBottomBtn() {
  detail_btn.style.transform = "translateY(-50px)";


}
function setDetailBtnClick(details, img, title, functionShowCentralText, top, left) {

  bottom_btn.addEventListener('click', () => {


    showDetailAnimation(details, img.querySelector(".img-project"), title);
    setCloseDetailBtnClick(details, img, title, functionShowCentralText, top, left);
  })
}
function updateBackButtonListener() {
  console.log("updateBackButtonListener called");
  // Always remove the old listener
  btn_top.removeEventListener('click', handleBackClick);
  // Add the new listener
  btn_top.addEventListener('click', handleBackClick);
}
function handleBackClick(event) {

  console.log("Back button clicked");
  if (backClickfunction) {
    backClickfunction(event);
  }
}
function setCloseDetailBtnClick(details, img, title, functionShowCentralText, top, left) {
  btn_top.style.pointerEvents = "auto";
  bottom_btn.style.pointerEvents = "none";

  backClickfunction = () => {
    closeDetailFunction(details, img, title, functionShowCentralText, top, left);
  };
  updateBackButtonListener();
}

function setUnselectBtnClick(details, img, title, functionShowCentralText, top, left) {
  btn_top.style.pointerEvents = "auto";
  bottom_btn.style.pointerEvents = "auto";

  console.log("setUnselectBtnClick called");
  backClickfunction = () => {
    console.log("unselectBtnClick function called");
    unSelectFunction(details, img, title, functionShowCentralText, top, left);
  };
  updateBackButtonListener();
}

const unSelectFunction = (details, img, title, functionShowCentralText, top, left) => {
  console.log("caca")
  btn_top.style.pointerEvents = "none";
  unselectAnimation(img, top, left);
};

const closeDetailFunction = (details, img, title, functionShowCentralText, top, left) => {
  console.log("dans le close");
  closeDetailAnimation(details, img, title, functionShowCentralText);
  setUnselectBtnClick(details, img, title, functionShowCentralText, top, left);
};

function unselectAnimation(img, top, left) {
  console.log("unselectAnim");
  collapseBackBtnAnimation();
  unPutImageInFront(img, top, left);
  collapseDetailBtnAnimation();
  showNameAnimation();
  console.log("jusquici", img_mf_container);
  
  cursor.style.zIndex = "0";
  rotate_tbqt();
  setTimeout(initOnClickImages, 900);
  setTimeout(initImagesOverEffect, 900);

  
  

}
updateBackButtonListener();

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
      setTimeout(() => { document.body.addEventListener('pointermove', pointerMoveHandler); }, 1000)

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
function reverse_rotate_tbqt() {
  tb_qt_1.animate({
    transform: "rotate(0)",
  }, { duration: 1000, easing: "cubic-bezier(0, 0.30, 0.19, 1)" });
  tb_qt_2.animate({
    transform: "rotate(0)",
  }, { duration: 1000, easing: "cubic-bezier(0, 0.30, 0.19, 1)" });
  tb_qt_3.animate({
    transform: "rotate(0)",
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
  col_8.style.transform = "translateY(" + -5 * HEIGHT_LETTER_CELL + "px)";
  col_9.style.transform = "translateY(" + -3 * HEIGHT_LETTER_CELL + "px)";
  col_10.style.transform = "translateY(" + -1 * HEIGHT_LETTER_CELL + "px)";
  col_11.style.transform = "translateY(" + -2 * HEIGHT_LETTER_CELL + "px)";
  //rotate_tbqt();
}
function showAnazirTextAnimation() {
  col_1.style.transform = "translateY(" + -1 * HEIGHT_LETTER_CELL + "px)";
  col_2.style.transform = "translateY(" + -1 * HEIGHT_LETTER_CELL + "px)";
  col_3.style.transform = "translateY(" + -2 * HEIGHT_LETTER_CELL + "px)";
  col_4.style.transform = "translateY(" + 0 * HEIGHT_LETTER_CELL + "px)";
  col_5.style.transform = "translateY(" + -3 * HEIGHT_LETTER_CELL + "px)";
  col_6.style.transform = "translateY(" + -3 * HEIGHT_LETTER_CELL + "px)";
  col_7.style.transform = "translateY(" + HEIGHT_LETTER_CELL + "px)";
  col_8.style.transform = "translateY(" + -2 * HEIGHT_LETTER_CELL + "px)";
  col_9.style.transform = "translateY(" + -2 * HEIGHT_LETTER_CELL + "px)";
  col_10.style.transform = "translateY(" + -0 * HEIGHT_LETTER_CELL + "px)";
  col_11.style.transform = "translateY(" + -2 * HEIGHT_LETTER_CELL + "px)";
  rotate_tbqt();
}
function showMainImagesAnimation() {
  img_mf_container.style.transform = "translate(70vw, 70vh)";
  img_anazir_container.style.transform = "translate(60vw, 10vh)";
  img_more.style.transform = "translate(10vw, 70vh)";
}
function showDetailBtnAnimation() {
  detail_btn.style.transform = "translateY(0px)";
  setTimeout(() => { animation_SVG_forward_bottom.beginElement() }, 200);


}
function collapseDetailBtnAnimation() {
  detail_btn.style.transform = "translateY(-50px)";
  setTimeout(() => { animation_SVG_backward_bottom.beginElement() }, 0);

}
function showBackBtnAnimation() {
  btn_back.style.transform = "translateY(0px)";
  setTimeout(() => { animation_SVG_forward.beginElement() }, 200);

}
function collapseBackBtnAnimation() {
  btn_back.style.transform = "translateY(30px)"
  setTimeout(() => { animation_SVG_backward.beginElement() }, 0);

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

function closeDetailAnimation(details, img, title, functionShowCentralText) {
  hideDetails(details);
  setTimeout(hideGallery, 50);
  setTimeout(hideBigTitle, 50, title);
  setTimeout(unPutMainImageFullScreen, 200, img.querySelector(".img-project"));
  setTimeout(showTBQT, 250);

  setTimeout(showDetailBtnAnimation, 400);
  setTimeout(functionShowCentralText, 250);
  setTimeout(reinitGallery, 500);

}
function hideDetails(details) {
  //const details_container = details.querySelector(".details-container");
  //details_container.style.transform = "translateY(25px)";
}
function reinitGallery() {
  gallery_container.style.display = "none";
  gallery_container.style.transform = "translateY(0px)";

}
function hideGallery() {
  gallery_container.style.transition = "transform 1s ease-out";
  gallery_container.style.transform = "translateY(1500px)";
}
function hideBigTitle(title) {
  var i = 0;
  const listLetter = title.getElementsByClassName("big-letter");
  const size = listLetter.length;
  for (letter of listLetter) {
    letter.style.transition = "all 900ms cubic-bezier(0, 0.30, 0.19, 1)";
    letter.style.transform = "translateX(-300px)";
  }
  setTimeout(() => { title.style.bottom = "100%" }, 400);

}

function unPutMainImageFullScreen(img) {
  img.style.transition = "all 300ms ease-in";

  img.style.height="70%";
  img.style.width="60%";
  img.style.filter = "blur(0px)";
}
function showTBQT() {

  tb_qt_1.animate({
    transform: "rotate(0deg)",
    width: "275px"

  }, { duration: 1000, fill: "forwards", easing: "cubic-bezier(0, 0.30, 0.19, 1)" });
  tb_qt_2.animate({
    transform: "rotate(0deg)",
    width: "275px"
  }, { duration: 1000, fill: "forwards", easing: "cubic-bezier(0, 0.30, 0.19, 1)" });
  tb_qt_3.animate({
    transform: "rotate(0deg)",
    width: "275px"
  }, { duration: 1000, fill: "forwards", easing: "cubic-bezier(0, 0.30, 0.19, 1)" });

}

function showDetailAnimation(details, img, title) {

  allColEmpty();
  setTimeout(collapseTBQT, 100);

  putMainImageFullScreen(img);

  setTimeout(revealBigTitle, 450, title);
  setTimeout(collapseDetailBtnAnimation, 450);
  setTimeout(showGallery, 1000);
  setTimeout(showDetails, 1800, details);

}


function showDetails(details) {
  //const details_container = details.querySelector(".details-container");
  //details_container.style.transform = "translateY(0px)";
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
  setTimeout(initOutlineSelected, delay + 1100);/**/



}

function moveOutlineSelected(elt) {
  const position = elt.getBoundingClientRect();
  const outline_rect = outline_selected.getBoundingClientRect();
  const target = position.top - outline_rect.top;

  outline_selected.style.transform = "translateY(" + (selected_translation + target) + "px)";

  selected_translation += target;
}

function initOutlineSelected() {
  //moveOutlineSelected(selector_1);

  outline_selected.style.opacity = 1;

}

function moveToCenterGallery(img) {
  centerFromTheBottom(img);

}
function revealBigTitle(title) {
  var i = 0;
  title.style.bottom = 0;
  const listLetter = title.getElementsByClassName("big-letter");
  const size = listLetter.length;
  // translateBigLetter(0,i, size, listLetter);
  for (letter of listLetter) {
    letter.style.transition = "all 1100ms cubic-bezier(0, 0.30, 0.19, 1)";
    letter.style.transform = "translateX(" + 0 + "px)";
  }
}




function putMainImageFullScreen(img) {
  img.style.transition = "all 300ms ease-in";

  img.style.height="100%";
  img.style.width="100%";
  img.style.filter = "blur(80px)";


}
function initImagesOverEffect() {
  console.log("dans le initoHover");
  list_main_images.forEach(elt => {
    elt.style.filter = "grayscale(100%)"
    elt.addEventListener('mouseenter', () => { console.log("ici"), elt.style.filter = "grayscale(0%)"; mouseEnterImageHandler(elt) });
    elt.addEventListener('mouseleave', () => { elt.style.filter = "grayscale(100%)"; endHoverMainImageAnimation(elt) });
    console.log("laaaaaaa", elt);
  });
}
function initBtnHoverEffect() {
  btn_top.addEventListener('mouseenter', () => { console.log('coucou'); mouseEnterBtnHandler(btn_top) });
  btn_top.addEventListener('mouseleave', () => { console.log('coucou'); endCursorHoverAnimation() });
  bottom_btn.addEventListener('mouseenter', () => { console.log('coucou'); mouseEnterBtnHandler(bottom_btn) });
  bottom_btn.addEventListener('mouseleave', () => { console.log('coucou'); endCursorHoverAnimation() });

}
function removeImagesOverEffect() {
  list_main_images.forEach(elt => {
    const clonedElement = elt.cloneNode(true);
    // Replace the original element with the cloned one
    elt.parentNode.replaceChild(clonedElement, elt);
    reAssaignMainImages()


    list_main_images = [img_mf_container, img_anazir_container, img_more];
  });
}
function reAssaignMainImages() {
  img_mf_container = document.getElementById('img-mobile-food');
  img_anazir_container = document.getElementById('img-anazir');
  img_more = document.getElementById('img-more');

  img_mf = img_mf_container.querySelector(".img-project");
  img_anazir = img_anazir_container.querySelector(".img-project");
}

function initOnClickImages() {
  console.log("dans le initOnClick", img_mf_container);
  img_anazir_container.addEventListener('click', function (e) {
    clickOnAnazir();
  });
  img_more.addEventListener('click', function (e) {
    clickOnMore();
  });
  img_mf_container.addEventListener('click', function (e) {

    clickOnMobileFood();
  });

}

function startCursorHoverAnimation(elt, factor) {

  const rect = elt.getBoundingClientRect();
  const rectCursor = cursor.getBoundingClientRect();
  const imageLeft = ((rect.left + 0.5 * rect.width)); // Account for any scrolling
  const imageTop = (rect.top + 0.5 * rect.height);   // Account for any scrolling

  // Move the cursor to the image's position
  cursor.animate({
    left: `${imageLeft}px`,
    top: `${imageTop}px`
  }, {
    duration: 500, fill: "forwards",
    easing: "cubic-bezier(0, 0.30, 0.19, 1)"
  }); // Adjust duration as needed

  var delay = 3;
  for (const child of cursor.children) {

    child.style.width = `${factor * rect.width}px`;
    child.style.height = `${factor * rect.height}px`;
    setTimeout(() => { child.style.animation = 'pulse ' + delay + 's ease-in-out infinite'; delay += 0.5 }, 300);


  }

  rotate_cursor(1);

}

function startHoverMainImageAnimation(img) {
  startCursorHoverAnimation(img, 1.25);
  showMobileFoodTextAnimation();
}
function endHoverMainImageAnimation() {

  endCursorHoverAnimation();
  showNameAnimation();
}


function endCursorHoverAnimation() {
  for (const child of cursor.children) {
    //child.style.animation ="";
    child.style.height = "20px";
    child.style.width = "20px";
  }
  rotate_cursor(-1);
  document.body.addEventListener('pointermove', pointerMoveHandler);
}



const pointerMoveHandler = event => {

  const { clientX, clientY } = event;
  let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  var xForTBQT = (clientX / vw - 0.5) * 30;
  var yForTBQT = (clientY / vh - 0.5) * 20;
  tb_qt_1.animate({
    transform: `translate(${-xForTBQT}px,${yForTBQT}px)`,

    //margin: `${clientY}px`
  }, { duration: 1000, fill: "forwards" });
  tb_qt_2.animate({
    transform: `translate(${-xForTBQT}px,${-yForTBQT}px)`,


    //margin: `${clientY}px`
  }, { duration: 1000, fill: "forwards" });
  tb_qt_3.animate({
    transform: `translate(${xForTBQT}px,${-yForTBQT}px)`,


    //margin: `${clientY}px`
  }, { duration: 1000, fill: "forwards" });

  cursor.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 1000, fill: "forwards" });
};



const mouseEnterImageHandler = (elt) => {
  document.body.removeEventListener('pointermove', pointerMoveHandler);
  startHoverMainImageAnimation(elt);
}
const mouseEnterBtnHandler = (elt) => {
  document.body.removeEventListener('pointermove', pointerMoveHandler);
  startCursorHoverAnimation(elt, 1.25);
}



function clickOnAnazir() {
  removeImagesOverEffect();
  endHoverMainImageAnimation(img_anazir_container);

  setDetailBtnClick(detail_mf, img_anazir_container, big_title_anazir, showAnazirTextAnimation, "10vh", "95vh");
  setCloseDetailBtnClick(detail_mf, img_anazir_container, big_title_anazir, showAnazirTextAnimation, "10vh", "95vh");
  cursor.style.zIndex = "10";

  setTimeout(() => { img_mf_container.style.transform = "translate(100vw, 70vh)" }, 100);
  setTimeout(() => { img_more.style.transform = "translate(10vw, 100vh)"; }, 100);


  setTimeout(putImageInFront, 100, img_anazir_container);
  setTimeout(showAnazirTextAnimation, 400);

  setTimeout(showDetailBtnAnimation, 400);
  setTimeout(showBackBtnAnimation, 400);
}


function clickOnMore() {
  removeImagesOverEffect();
  endHoverMainImageAnimation(img_more);
  cursor.style.zIndex = "10"




  setTimeout(putImageInFront, 10, img_more);

}

function clickOnMobileFood() {
  removeImagesOverEffect();
  endCursorHoverAnimation();
  document.body.addEventListener('pointermove', pointerMoveHandler);
  setDetailBtnClick(detail_mf, img_mf_container, big_title_mf, showMobileFoodTextAnimation, "70vh", "70vw");
  setUnselectBtnClick(detail_mf, img_mf_container, big_title_mf, showMobileFoodTextAnimation, "70vh", "70vw");

  cursor.style.zIndex = "10";
  //img_mf_container.style.transform = "translate(100vw, 70vh)";
  setTimeout(() => { img_anazir_container.style.transform = "translate(60vw, -100%)" }, 100);
  setTimeout(() => { img_more.style.transform = "translate(10vw, 100vh)"; }, 100);



  setTimeout(putImageInFront, 100, img_mf_container);
  //setTimeout(showMobileFoodTextAnimation, 200); 

  setTimeout(showDetailBtnAnimation, 400);
  setTimeout(showBackBtnAnimation, 400);
}
function putImageInFront(img) {


  img.style.transition = "all 1s cubic-bezier(.8,0,.20,1)";
  img.style.transform = "translate(0,0)";




  img.style.height = "100vh";


  img.style.width = "100vw";




}
function unPutImageInFront(img, top, left) {
  console.log("coucou3", img, top, left);
  img.style.transition = "all 1s cubic-bezier(.8,0,.20,1)";
  showMainImagesAnimation()

  img.style.height = "170px";
  img.style.width = "300px";
}


// Start the simulation

initCol();
initMainImages();
initOnClickImages();
simulateProgress();
initImagesOverEffect();
initBottomBtn();
initBtnHoverEffect()