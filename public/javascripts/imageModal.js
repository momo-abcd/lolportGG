const post = document.getElementById("Post");
const p = document.createElement("div");

let isModalOn = false;
let curIndex = 0;

function openModal(imgs) {
  let str;
  if(typeof imgs == 'string')
    str = imgs.split(';');
  else 
    str = imgs;
  console.log(str,123123123);
  const p = document.createElement("div");
  p.classList.add('modal');
  p.id = 'myModal';
  let li = "";

  for(let i=0 ;i< str.length-2; i++) {
    li += `<li style="display:none;"><img  src='/uploads/${str[i]}'/></li>`
    }


  p.innerHTML = `
		<div class="modal-content">
			<span class="close">&times;</span>
      <ul style="height:90%;display:flex;justify-content:center;align-items:center;" class="mySlides">
      ${li}
      </ul>
        <h2 style="color:black;"><span id="curIndex">${curIndex+1}</span>/${(str.length-2)}</h2>
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
		</div>
  `;
  post.appendChild(p);

  const closeBtn = document.getElementsByClassName('close')[0];
  const slides = document.getElementsByClassName('mySlides')[0];

  showSlides();

  window.onclick = function(event) {
    if (event.target == p) {
      isModalOn = false;
      post.removeChild(p);
      curIndex=0;
      console.log(curIndex);
    }
  }
  closeBtn.onclick = function() {
      post.removeChild(p);
      isModalOn=false;
      curIndex = 0;

  }
    isModalOn = true;
    p.style.display='block';
}


function plusSlides(btn) {
  if(isModalOn) {
    const slides = document.getElementsByClassName('mySlides')[0];
    if(btn == 1) {
      if(curIndex == slides.children.length-1) curIndex=0;
      else curIndex += 1;
    showSlides();
    }else {
      if(curIndex == 0) curIndex = slides.children.length-1
      else curIndex -=1;
    showSlides(1);
    }
  }
}
function showSlides(...args) {
  const slides = document.getElementsByClassName('mySlides')[0].children;
    console.log(curIndex);
  if(!args[0]){
    if(curIndex ==0) {
      slides[slides.length-1].style.display='none';
    }else {
      slides[curIndex-1].style.display='none';
    }
      slides[curIndex].style.display='block';
  }else {
    if(curIndex == slides.length-1){
        slides[0].style.display='none';
    }else {
     slides[curIndex+1].style.display='none';
    }
    slides[curIndex].style.display='block';
  }
const indexNum = document.getElementById("curIndex").textContent=curIndex+1;
}

/*
function showSlides(acurIndex, slides) {
  if(slides.children.length>1){
    if(curIndex > slides.children.length-1) {
      slides.children[slides.children.length-1].style.display='none';
      curIndex = 0;
      slides.children[curIndex].style.display='block';
    }
    else if(curIndex < 0) {
      slides.children[0].style.display='none';
      curIndex = slides.length;
      slides.children[curIndex].style.display='block';
    }else {
      if(curIndex > 0)
        slides.children[curIndex-1].style.display='none';
      slides.children[curIndex].style.display='block';
      console.log(curIndex);
    }
  }else {
    slides.children[curIndex].style.display='block';
  }


}
*/
