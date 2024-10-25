var indexMovableName=0;
const movableNamePositionTab = [[0,-1,0,-1,-1,0,-2,1,-2,1,1,-2],[0,-1,0,-1,-1,0,-2,0,-1,-1,-1,-1],[-1,0,-1,0,0,-1,0,0,0,0,0,0]];
const changeBtn =document.querySelector("#about-name .change-btn");
const nameContainerMovable= document.querySelector("#about-name .info-movable" )



function changeLetter(container, colPositions, letterHeight){
    const colList= container.querySelectorAll("[class^=info-col]");
  //  console.log('colList',colList);

    for (var i=0; i<colList.length; i++){
        colList[i].style.transform=`translateY(${colPositions[i]*letterHeight}px)`;
    }

}


function handleClickChangeNameMovableButton(container, letterHeight) {
    rotateCursorByAnim(45);
    //console.log(container, letterHeight);
    indexMovableName++;
    const position=movableNamePositionTab[indexMovableName%3];
    changeLetter(container, position, letterHeight);
}




function initNameMovable(){
    const positionTab=[0,-1,0,-1,-1,0,-2,1,-2,1,1,-2];
    changeLetter(nameContainerMovable, positionTab, 50);
}

function initChangeBtn() {
    changeBtn.addEventListener('click', ()=>{handleClickChangeNameMovableButton(nameContainerMovable, 50 )})
    changeBtn.addEventListener('mouseenter', () => { mouseEnterBtnHandler(changeBtn) });
    changeBtn.addEventListener('mouseleave', () => { endCursorHoverAnimation() });
    
  }

initChangeBtn()
changeBtn.addEventListener('click', ()=>{handleClickChangeNameMovableButton(nameContainerMovable, 50 )})

initNameMovable();