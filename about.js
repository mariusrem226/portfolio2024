var indexMovableName=0;
const movableNamePositionTab = [[0,-1,0,-1,-1,0,-2,1,-2,1,1,-2],[0,-1,0,-1,-1,0,-2,0,-1,-1,-1,-1],[-1,0,-1,0,0,-1,0,0,0,0,0,0]];

const movableJobPositionTab = [
    [0,-1,0,1,-1,0,0,0,-1,-2,0,0,0, 0, 0],

    [0,-1,0,1,-1, 0, -1,-1,0,0,1,1, 1, 1, 1]];
const movableUsePositionTab=[
    [-1,  0 , -1, -1, -3,  0, -1,  0,  0,  0],
    [ 0, -1 , -3,  0, -1, -1,  0, -2,  1, -3],
    [-2, -3 , -2, -3,  0,  1, -2,  1, -2,  1],
    [-4, -2 ,  0, -4, -3, -2,  1, -2, -2,  1],
    [-3, -3 , -4, -2, -2, -1,  0,  1,  1, -3]
]

const movableContactPositionTab=[
    [-1, -1, 0],
    
]

const indexList={
    "name":0,
    "job":0,
    "use":0,
    "contact":0,
    
}

const nameLine=document.getElementById("about-name");
const jobLine=document.getElementById("about-job");
const useLine=document.getElementById("about-use");
const contactLine=document.getElementById("about-contact");






function changeLetter(container, colPositions, letterHeight){
    const colList= container.querySelectorAll("[class^=info-col]");
  //  console.log('colList',colList);

    for (var i=0; i<colList.length; i++){
        colList[i].style.transform=`translateY(${colPositions[i]*letterHeight}px)`;
    }

}


function handleClickChangeNameMovableButton(container, letterHeight, movablePositions, name) {
    rotateCursorByAnim(45);
    //console.log(container, letterHeight);
    let num=0;
    indexList[name]++;
    const index=indexList[name];
    const position=movablePositions[index%movablePositions.length];
    changeLetter(container, position, letterHeight);
}




function initMovable(line, movablePositions){
    const positionTab=movablePositions[0];
    const containerMovable= line.querySelector(".info-movable" )

    changeLetter(containerMovable, positionTab, 50);
}

function initChangeBtn(line, movablePositions, name) {
    const changeBtn =line.querySelector(".change-btn");
    const containerMovable= line.querySelector(".info-movable" )

    changeBtn.addEventListener('click', ()=>{handleClickChangeNameMovableButton(containerMovable, 50, movablePositions, name )});
    changeBtn.addEventListener('mouseenter', () => { mouseEnterBtnHandler(changeBtn) });
    changeBtn.addEventListener('mouseleave', () => { endCursorHoverAnimation() });
    
  }

initChangeBtn(nameLine, movableNamePositionTab, "name");
initChangeBtn(jobLine, movableJobPositionTab, "job");
initChangeBtn(useLine, movableUsePositionTab, "use");

initMovable(nameLine, movableNamePositionTab);
initMovable(jobLine, movableJobPositionTab);
initMovable(useLine, movableUsePositionTab);
initMovable(contactLine, movableContactPositionTab);